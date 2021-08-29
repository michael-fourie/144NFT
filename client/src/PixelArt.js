import React, { setState, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import blank_img from './img/blank.png'
import test_img from './img/test-img.png'
import './PixelArt.css'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function PixelArt(props) {
    const [image, setImage] = useState(blank_img)
    const [isEmpty, setIsEmpty] = useState(true)
    const [imageBorder, setImageBorder] = useState('0px solid')
    const [open, setOpen] = useState(false);

    const pixelArtId = props.id
    const Title = ({ children }) => <div className="dialogTitle">{children}</div>;
    const Description = ({ children }) => <div className="dialogDescription">{children}</div>;

    const handleClickOpen = () => {
        setOpen(true);
        console.log(pixelArtId);
    };

    const handleClose = () => {
        setOpen(false);
    };
  

    return (
            <div id="imgBorder">
                <img
                    src={image}
                    onClick={handleClickOpen}
                    width="100%"
                    alt="art"
                />
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>
                        <Title>Grid #{pixelArtId} is available!</Title>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <Description>
                                Draw and mint your own NFT to be inserted in this tile.
                            </Description>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={props.action} color="primary" style={{ fontFamily: 'VT323', fontSize: '24px' }}>
                            Draw
                        </Button> 
                    </DialogActions>
                </Dialog>
            </div>
    )
}