import React, { useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { Button } from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import blank_img from '../img/blank.png'
import '../style/PixelArt.css'
import Web3 from 'web3'
import {isMobile} from 'react-device-detect';
import Util144 from '../abis/Utility144NFT.json'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function PixelArt(props) {
    const [image, setImage] = useState(blank_img)
    const [imageBorder, setImageBorder] = useState('0px solid')
    const [artist, setArtist] = useState('0x0')
    const [imgSet, setImgSet] = useState(false)
    const [open, setOpen] = useState(false);

    const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/6d2cfaaa7bbf427fb1a27228b40a84ff'))
    const util144Contract = new web3.eth.Contract(Util144.abi, '0x30b286c16419A87193aB4E4Fcf3C2a0d0c93502d')

    const gridId = props.id
    const modal = props.modal
    let imgUrl = ''
    const Title = ({ children }) => <div className="dialogTitle">{children}</div>;
    const Description = ({ children }) => <div className="dialogDescription">{children}</div>;

    useEffect(() => {
        util144Contract.methods.getUri(gridId.toString()).call(function (err, res) {
            if (err) {
              console.log("An error occured", err)
              return
            }
            if (res != ''){
                setImgSet(true)
                let hash = res.slice(7)
                imgUrl = "https://ipfs.io/ipfs/" + hash
                setImage(imgUrl)
          }
        })

        util144Contract.methods.getAddress(gridId.toString()).call(function (err, res) {
            if (err) {
              console.log("An error occured", err)
              return
            }
            if (res != ''){
                setArtist(res)
          }
        })
    }, [])

    const handleDrawStateFunc = () => {
        props.handleDrawState()
    }
    
    const handleGridIdFunc = (id) => {
        props.handleGridId(id)
    }

    const handleClickOpen = () => {
        if (!modal) { 
            setOpen(true);
        } else {
            return
        } 

    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClick  =() => {
        props.gridIdHandler(gridId)
        props.drawStateHandler()
    }

    return (
            <div id="imgBorder">
         
                <img
                    src={image}
                    onClick={ handleClickOpen}
                    width="100%"
                    alt="art"
                />
                
                { imgSet ? 
                <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                
                <DialogTitle>
                    <Title>Grid #{gridId} by {artist.slice(0, 7)}</Title>
                </DialogTitle>
                <DialogContent>
                    <img
                        src={image}
                        onClick={ handleClickOpen}
                        width="85%"
                        alt="art"
                        style={{
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto'}}

                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} 
                        color="grey" style={{ fontFamily: 'VT323', fontSize: '20px' }}>
                        Close
                    </Button> 
                </DialogActions>
            </Dialog> 
            : [(isMobile ? 
                <Dialog
                 open={open}
                 TransitionComponent={Transition}
                 keepMounted
                 onClose={handleClose}
                 aria-labelledby="alert-dialog-slide-title"
                 aria-describedby="alert-dialog-slide-description"
             >
                 
                 <DialogTitle>
                     <Title>Mobile User Detected</Title>
                 </DialogTitle>
                 <DialogContent>
                     <DialogContentText>
                         <Description>
                             Please use a computer to draw and mint your NFT.
                         </Description>
                     </DialogContentText>
                 </DialogContent>
                 <DialogActions>
                     <Button onClick={handleClose} 
                         color="grey" style={{ fontFamily: 'VT323', fontSize: '24px' }}>
                         Close
                     </Button> 
                 </DialogActions>
             </Dialog>
            :
            
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    
                    <DialogTitle>
                        <Title>Grid #{gridId} is available!</Title>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <Description>
                                Draw and mint your own NFT to be inserted in this tile.
                            </Description>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} 
                            color="grey" style={{ fontFamily: 'VT323', fontSize: '24px' }}>
                            Close
                        </Button> 
                        <Button onClick={modal ? console.log('test') : handleClick} color="primary" style={{ fontFamily: 'VT323', fontSize: '24px' }}>
                            Draw
                        </Button> 
                    </DialogActions>
                </Dialog>
             )]}
             
                
            </div> 
    )
}