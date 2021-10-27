import React, { useRef, useState, useEffect } from 'react';
import Util144 from '../abis/Utility144NFT.json'
import Button from '@material-ui/core/Button'
import { ChromePicker } from 'react-color'
import axios from 'axios'
import ColorizeIcon from '@material-ui/icons/Colorize';
import UndoIcon from '@material-ui/icons/Undo';
import IconButton from '@material-ui/core/IconButton';
import '../style/Editor.css';
import Web3 from 'web3'



let pixelArray = []
let prevArray = []

function Editor(props) {
    const componentRef = useRef()
    //state
    const height = 32
    const width = 32
    const [background, setBackground] = useState('#FFFFFF')
    const [cellColor, setCellColor] = useState('#000000')
    const [mouseDown, setMouseDown] = useState(false)
    const [undoState, setUndoState] = useState(false)
    const [colorPickerState, setColorPickerState] = useState(false)
    const [loading, setLoading] = useState(false)
    const [util144, setUtil144] = useState(null)
    const [account, setAccount] = useState('0x00')
    
    const gridId = props.id  
    
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
        cell.setAttribute("draggable", false)
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
    window.scrollTo(0, 0)
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
    event.preventDefault()
    console.log(event.target.id)
    setMouseDown(true)
    if(firstDown){
      setPrevArray([...pixelArray])
      setUndoState(true)
    }
    if (!colorPickerState) {
      event.target.style.backgroundColor = cellColor;
      pixelArray[event.target.id] = cellColor;
    } else {
      setCellColor(event.target.style.backgroundColor)
      setColorPickerState(false)
    }
  }

  function handleMouseState() {
    setMouseDown(false)
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
        setUndoState(false)
    }
  }


  async function handleMint() {
    if (account === undefined) {
      loadWeb3()
      loadBlockchainData()
    }
    const article = { "postArray": pixelArray };
    axios.post('https://pixel2ipfs.xyz/post', article)
    .then(response => {
      let ipfsHash = response.data['IpfsHash']
      ipfsHash = "ipfs://" + ipfsHash
      console.log(ipfsHash)
      console.log(account)
      util144.methods.buyGrid(account, ipfsHash, gridId).send({ from: account, value: 72500000000000000 }).on('transactionHash', (hash) => {
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
            draggable="false"
            style={{ backgroundColor: background}}
            onDragStart={() => false}
            onMouseDown={handleCellColorOnClick(true)}
            onMouseMove={mouseDown ? handleCellColorOnClick(false) : null}
            onMouseUp={mouseDown ? handleMouseState : null}
            onMouseLeave={mouseDown ? handleMouseState : null}
            >
          </table>
        </div>

        <div className='buttons'>
          <Button  className="btn btn-2" onClick={props.drawStateHandler} variant="contained" color='#f9f9f9' style={{ fontFamily: 'VT323', fontSize: 24, color: 'white', width: '250px', height: '75px', marginTop: '25%' }}>Back</Button>
          <Button className="btn btn-2" onClick={handleMint} variant="contained" color='#f9f9f9' style={{ fontFamily: 'VT323', fontSize: 24, color: 'white', width: '250px', height: '75px', marginTop: '25%' }}>Mint NFT</Button>     
          <p style={{fontSize: '18px'}}>0.0725 ETH</p>
        </div>
      </div>
    );
}

export default Editor;