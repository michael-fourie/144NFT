import React, { useState } from "react";
import Button from '@material-ui/core/Button'
import WelcomeText from './components/WelcomeText'
import Editor from './components/Editor'
import PixelGrid from './components/PixelGrid'
import { Toolbar, Typography, Box, Modal,  } from "@material-ui/core";
import { makeStyles } from '@material-ui/core';
import "./App.css";




function App() {
  const [drawState, setDrawState] = useState(true);
  const [gridId, setGridId] = useState(null)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false)

  const [openTwo, setOpenTwo] = useState(false);
  const handleOpenTwo = () => setOpenTwo(true);
  const handleCloseTwo = () => setOpenTwo(false)


  function drawStateHandler() {
    setDrawState(!drawState)
  } 

  function gridIdHandler(gridId) {
    setGridId(gridId)
  }


  return (
    <div>

      {drawState ?

      <div className="mainPage">
        <WelcomeText />
        <div className="horizontal">
        <Button className = "btn btn-2" onClick={handleOpenTwo} style={{ borderRadius: '18px', color: 'white', fontFamily: 'VT323', marginRight: '15%'}} variant="contained">About</Button>
        <Modal
            open={openTwo}
            onClose={handleCloseTwo}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="modalStyle">
              <div style={{display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '10px'}}>
                <pre className='bio'> {`
            144NFT is a collaborative NFT project consisting of a 12 x 12 board of 144 grids.
            Each grid is a 32 x 32 canvas where you can create the NFT pixel art youv'e always desired.
            You own the pixel art you create, have full rights over it, and it will always be displayed on the board.
            Each grid costs 0.07 ETH to mint, plus gas.
            Once all 144 grids have been drawn, the final masterpiece will be minted and auctioned off.
            All proceeds from auction will be evenly distributed between all 144NFT contributers.
            The masterpiece will always live on the Ethereum blockchain.
            Become a part of the largest collaborative art project on the Blockchain.
            `}
          </pre>
              </div>
              <Button  className="btn btn-2" onClick={handleCloseTwo} variant="contained" color='#f9f9f9' style={{ fontFamily: 'VT323', fontSize: 24, color: 'white', width: '100px', height: '40px', marginLeft: '40%' }}>Back</Button>
            </Box>
         </Modal>
          <Button className = "btn btn-2" onClick={handleOpen} style={{borderRadius: '18px', color: 'white', fontFamily: 'VT323'}} variant="contained">Full Image</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="modalStyleImg">
              <div style={{display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                         }}>
                <PixelGrid gridIdHandler={gridIdHandler} gridId = {gridId} drawState={drawState} drawStateHandler={drawStateHandler} modal={true} />
              </div>
            </Box>
         </Modal>
        </div>
        <div className="grid">
          <PixelGrid gridIdHandler={gridIdHandler} gridId = {gridId} drawState={drawState} drawStateHandler={drawStateHandler} modal={false} />
        </div>
      </div>
      :
      <div className="drawPage">
        <Editor id={gridId} drawState={drawState} drawStateHandler={drawStateHandler}/>
      </div>
      }
      <p style={{color: '#ffd9fc', marginLeft: '5px'}}>made by michael</p>
    </div>
  )
}

export default () => (
  <App />
)