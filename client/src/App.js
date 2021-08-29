import React, { Component, useState } from "react";
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import WelcomeText from './WelcomeText'
import Editor from './Editor'
import PixelGrid from './PixelGrid'
import { Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useWallet, UseWalletProvider } from '../node_modules/use-wallet'

import "./App.css";
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
    color: 'black'
  },
}));

function App() {
  const wallet = useWallet()
  const blockNumber = wallet.getBlockNumber()

  const classes = useStyles()

  const [drawState, setDrawState] = useState(true);
  
  function drawStateHandler(){
    setDrawState(!drawState)
  } 

  return (
    <div>
      <AppBar position="static" style={{ background: '#FFFFFF' }}>
        <Toolbar>
          <img src={img} alt="logo" height="25" width="25" />
          <Typography variant="h6" className={classes.title}>144NFT</Typography>
          <Button variant="contained" color='#f9f9f9' style={{ fontFamily: 'VT323', fontSize: 24, color: 'black' }} onClick={() => wallet.connect()}>Connect Wallet</Button>
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
          <PixelGrid action={drawStateHandler}/>
        </div>
      </div>
      :
      <div className="drawPage">
        <Editor action={drawStateHandler}/>
      </div>
      }
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