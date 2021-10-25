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
        <Button className = "btn btn-2" onClick={handleOpenTwo} style={{ borderRadius: '18px',  fontSize: '22px',color: 'white', fontFamily: 'VT323', marginRight: '15%'}} variant="contained">About</Button>
        <Modal
            open={openTwo}
            onClose={handleCloseTwo}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="modalStyle">
              <div style={{display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                          }}>
                <pre className='bio'> {`
            A Collaborative NFT project on Ethereum.
            There are 144 indiviudal grids that come together to make one masterpiece.
            Each grid is a 32 x 32 pixel art canvas.
            Each grid costs 0.06 ETH to mint.
            Once all 144 grids have been minted, the final masterpiece will be minted and auctioned off.
            All proceeds from auction will be evenly distributed between all 144NFT holders.
            Become a part of a unique NFT masterpiece on the Blockchain.
            `}
          </pre>
              </div>
              <Button  className="btn btn-2" onClick={handleCloseTwo} variant="contained" color='#f9f9f9' style={{ fontFamily: 'VT323', fontSize: 24, color: 'white', width: '100px', height: '40px', marginLeft: '40%', marginBotton: '1%' }}>Back</Button>
            </Box>
         </Modal>
          <Button className = "btn btn-2" onClick={handleOpen} style={{borderRadius: '18px', fontSize: '22px', color: 'white', fontFamily: 'VT323'}} variant="contained">Full Image</Button>
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
      <br></br>
    </div>
  )
}

export default () => (
  <App />
)