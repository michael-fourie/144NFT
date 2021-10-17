import React, { useState } from "react";
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import WelcomeText from './components/WelcomeText'
import Editor from './components/Editor'
import PixelGrid from './components/PixelGrid'
import { Toolbar, Typography, Box, Modal,  } from "@material-ui/core";
import { makeStyles } from '@material-ui/core';
import "./App.css";
import { useWallet, UseWalletProvider } from '../node_modules/use-wallet'
import img from './img/logo.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: 'VT323',
    fontSize: 38,
    color: '#9f0af5'
  },
}));

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  height: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {
  const classes = useStyles()
  const wallet = useWallet()
  const [drawState, setDrawState] = useState(true);
  const [gridId, setGridId] = useState(null)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false)

  function drawStateHandler() {
    setDrawState(!drawState)
  } 

  function gridIdHandler(gridId) {
    setGridId(gridId)
  }


  return (
    <div>
      <AppBar position="static" style={{ background: '#FFFFFF' }}>
        <Toolbar>
          <img src={img} alt="logo" height="25" width="25" />
          <Typography variant="h6" className={classes.title}>144NFT</Typography>
          <Button className = "btn btn-2" onClick={handleOpen} style={{ color: 'white', fontSize: 20, fontFamily: 'VT323'}} variant="contained" color="grey">Full Image</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={modalStyle}>
              <div style={{display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '10px'}}>
                <PixelGrid gridIdHandler={gridIdHandler} gridId = {gridId} drawState={drawState} drawStateHandler={drawStateHandler} modal={true} />
              </div>
            </Box>
         </Modal>
         {wallet.status === 'connected' ? (
            <Button className="btn btn-2" variant="contained"  style={{ color: 'white', fontFamily: 'VT323', fontSize: 20, marginLeft: '25px' }}>Connected</Button> 
            ) : (
              <Button className="btn btn-2" variant="contained"  style={{ color: 'white', fontFamily: 'VT323', fontSize: 20, marginLeft: '25px' }} onClick={() => wallet.connect()}>Connect Wallet</Button>          
         )}
        </Toolbar>
      </AppBar>

      {drawState ?

      <div className="mainPage">
        <WelcomeText />
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 25,

        }}>
          <PixelGrid gridIdHandler={gridIdHandler} gridId = {gridId} drawState={drawState} drawStateHandler={drawStateHandler} modal={false} />
        </div>
      </div>
      :
      <div className="drawPage">
        <Editor wallet = {wallet} id={gridId} drawState={drawState} drawStateHandler={drawStateHandler}/>
      </div>
      }
      <p>made by michael</p>
    </div>
  )
}

// Wrap everything in <UseWalletProvider />
export default () => (
  <UseWalletProvider
  chainId={1337}
  connectors={{
    // This is how connectors get configured
    portis: { dAppId: 'my-dapp-id-123-xyz' },
  }}
>
  <App />
</UseWalletProvider>
)