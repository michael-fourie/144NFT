import React, { useRef, useState, useEffect, withStyles } from 'react';
import Util144 from '../abis/Utility144NFT.json'
import ONEFOURFOUR from '../abis/ONEFOURFOURNFT.json'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import { Box } from '@material-ui/core';
import { ChromePicker } from 'react-color'
import axios from 'axios'
import ColorizeIcon from '@material-ui/icons/Colorize';
import UndoIcon from '@material-ui/icons/Undo';
import IconButton from '@material-ui/core/IconButton';
import '../style/Editor.css';
import Web3 from 'web3'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


let pixelArray = []
let prevArray = []

function Editor(props) {
    const componentRef = useRef()
    //state
    const [height, setHeight] = useState(32)
    const [width, setWidth] = useState(32)
    const [background, setBackground] = useState('#FFFFFF')
    const [cellColor, setCellColor] = useState('#000000')
    const [mouseDown, setMouseDown] = useState(false)
    const [menuVisible, setMenuVisible] = useState(true)
    const [undoState, setUndoState] = useState(false)
    const [colorPickerState, setColorPickerState] = useState(false)
    const [loading, setLoading] = useState(false)
    const [util144, setUtil144] = useState(null)
    const [onefourfour, setOnefourfour] = useState(null)
    const [account, setAccount] = useState('0x00')
    const gridId = props.id
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    
    
    async function loadBlockchainData() {
      const web3 = window.web3
      const accounts = await web3.eth.getAccounts()
      setAccount(accounts[0])
      const networkId = await web3.eth.net.getId()
  
      // Load Util144
      const util144Data = Util144.networks[networkId]
      if(util144Data) {
        const util144Contract = new web3.eth.Contract(Util144.abi, util144Data.address)
        setUtil144(util144Contract)
       
      } else {
        window.alert('util144 contract not deployed to detected network.')
      }
      // load ONEFOURFOUR
      const onefourfourData = ONEFOURFOUR.networks[networkId]
      if(onefourfourData) {
        const onefourfourContract = new web3.eth.Contract(ONEFOURFOUR.abi, onefourfourData.address)
        setOnefourfour(onefourfourContract)
       
      } else {
        window.alert('ONEFOURFOUR contract not deployed to detected network.')
      }
    }

    async function loadWeb3() {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum)
        await window.ethereum.enable()
      }
      else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider)
      }
      else {
        window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
      }
    }

  useEffect(() => {
    const canvas = document.querySelector("#pixel_canvas");
    canvas.innerHTML = '';
    setBackground('#ffffff')
    var counter = 0;

    for (let x = 0; x < height; x++) {
      let row = document.createElement("tr");
      canvas.appendChild(row);

      for (let y = 0; y < width; y++) {
        let cell = document.createElement("td");
        cell.setAttribute("id", counter);
        row.appendChild(cell);
        counter++;
      }
    }
    const tempPixelArray = []
    for (let i = 0; i < height * width; i++){
      tempPixelArray.push('#FFFFFF')
    }
    pixelArray = tempPixelArray
    loadWeb3()
    loadBlockchainData()
  }, []) 

  // Cell color
  function handleCellColor(color) {
    setCellColor(color.hex)
  }

  function setPrevArray(arr){
    prevArray = arr
  }
  function setPixelArray(arr){
    pixelArray = arr
  }

  const handleCellColorOnClick = (firstDown) => (event) => {
    if(firstDown){
      setPrevArray([...pixelArray])
      setUndoState(true)
    }
    if (!colorPickerState) {
      event.target.style.backgroundColor = cellColor;
      setMouseDown(true)
      pixelArray[event.target.id] = cellColor;
    } else {
      setCellColor(event.target.style.backgroundColor)
      setColorPickerState(false)
    }
  }

  function handleMouseState() {
    setMouseDown(false)
  }

  // Remove color
  function handleColorRemove(event){
    setPrevArray([...pixelArray])
    setUndoState(true)
    event.target.style.backgroundColor = '';
    pixelArray[event.target.id] = '#ffffff';
  }

  function colorPicker() {
    let colorPickerCurr = colorPickerState
    setColorPickerState(!colorPickerCurr)
  }

  function undo() {
      if (undoState){
        const allTableCells = document.getElementsByTagName("td");
        for(let i = 0, max = allTableCells.length; i < max; i++) {
          let node = allTableCells[i];
          node.style.backgroundColor = prevArray[i];
        }
        let copy = [...prevArray]
        setPixelArray(copy)
        //setPrevArray([])
        setUndoState(false)
    }
  }


  async function handleMint() {
    const article = { "postArray": pixelArray };
    axios.post('http://pixel2ipfs.xyz/post', article)
    .then(response => {
      let ipfsHash = response.data['IpfsHash']
      ipfsHash = "ipfs://" + ipfsHash
      console.log(ipfsHash)
      console.log(account)
      util144.methods.buyGrid(account, ipfsHash, gridId).send({ from: account, value: 60000000000000000 }).on('transactionHash', (hash) => {
          setLoading(false)
          props.drawStateHandler()
        })
      console.log('done')  
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
    return (
      <div className="Editor">
        <div className="App-Settings">
          <h3>Pick A Color</h3>
          <ChromePicker
            className="chromePicker"
            onChangeComplete={handleCellColor}
            color={cellColor}
            disableAlpha='true'
          />
          <p>Double click to remove a color</p>
          <div id="horizontal">
            <IconButton color={ colorPickerState ? "primary" : "grey"} onClick={colorPicker}>
              <ColorizeIcon />
            </IconButton>
            <IconButton color="primary" onClick={undo}>
              <UndoIcon color={ undoState ? "primary" : "grey"} onClick={undo}/>
            </IconButton>
          </div>
        </div>

        <div className="Canvas" ref={componentRef}>
    
          <table
            id="pixel_canvas"
            style={{ backgroundColor: background }}
            onMouseDown={handleCellColorOnClick(true)}
            onMouseMove={mouseDown ? handleCellColorOnClick(false) : null}
            onMouseUp={handleMouseState}
            onMouseLeave={mouseDown ? handleMouseState : null}
            onTouchStart={handleCellColorOnClick}
            onTouchMove={mouseDown ? handleCellColorOnClick : null}
            onTouchEnd={handleMouseState}
            onDoubleClick={handleColorRemove}>
          </table>
        </div>

        <div className='buttons'>
          <Button  className="btn btn-2" onClick={props.drawStateHandler} variant="contained" color='#f9f9f9' style={{ fontFamily: 'VT323', fontSize: 24, color: 'white', width: '250px', height: '75px', marginTop: '25%' }}>Back</Button>
          <Button className="btn btn-2" onClick={handleMint} variant="contained" color='#f9f9f9' style={{ fontFamily: 'VT323', fontSize: 24, color: 'white', width: '250px', height: '75px', marginTop: '25%' }}>Mint NFT</Button>   
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Wallet not connected.
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Please connect your MetaMask wallet using the 'Connect Wallet' button.
              </Typography>
            </Box> 
          </Modal>    
        </div>
      </div>
    );
}

export default Editor;