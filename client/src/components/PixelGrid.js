import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { blue } from '@material-ui/core/colors';
import PixelArt from './PixelArt';
import '../style/PixelGrid.css';
import {isMobile} from 'react-device-detect';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '97%',
        height: '97%',

    },
    paper: {
        textAlign: 'center',
        color: blue,
        backgroundColor: 'blue',
        height: 64,
        alignItems: 'baseline'
    },
}));

export default function PixelGrid(props) {
    const classes = useStyles();

    const gridIdHandler = (id) => {
        props.gridIdHandler(id)
    }
    
    const drawStateHandler = () => {
        props.drawStateHandler()
    }

    return (
        <div className={classes.root} >
            <Grid container spacing={0}>
                <Grid container item xs={12} spacing={0} style={isMobile ? {marginBottom: '-3.5px'}: {marginBottom: '-3px'}}>
                    <React.Fragment>
                        <Grid item xs={1}>
                            <PixelArt id='1' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='2' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='3' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='4' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal}  />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='5' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='6' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='7' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='8' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='9' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='10' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='11' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='12' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                    </React.Fragment>
                </Grid>
                <Grid container item xs={12} spacing={0} style={isMobile ? {marginBottom: '-3.5px'}: {marginBottom: '-3px'}}>
                    <React.Fragment>
                        <Grid item xs={1}>
                            <PixelArt id='13' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='14' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='15' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='16' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='17' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='18' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='19' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='20' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='21' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='22' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='23' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='24' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                    </React.Fragment>
                </Grid>
                <Grid container item xs={12} spacing={0} style={isMobile ? {marginBottom: '-3.5px'}: {marginBottom: '-3px'}}>
                    <React.Fragment>
                        <Grid item xs={1}>
                            <PixelArt id='25' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='26' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='27' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='28' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='29' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='30' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='31' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='32' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='33' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='34' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='35' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='36' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                    </React.Fragment>
                </Grid>
                <Grid container item xs={12} spacing={0} style={isMobile ? {marginBottom: '-3.5px'}: {marginBottom: '-3px'}}>
                    <React.Fragment>
                        <Grid item xs={1}>
                            <PixelArt id='37' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='38' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='39' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='40' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='41' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='42' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='43' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='44' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='45' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='46' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='47' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='48' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                    </React.Fragment>
                </Grid>
                <Grid container item xs={12} spacing={0} style={isMobile ? {marginBottom: '-3.5px'}: {marginBottom: '-3px'}}>
                    <React.Fragment>
                        <Grid item xs={1}>
                            <PixelArt id='49' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='50' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='51' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='52' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='53' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='54' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='55' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='56' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='57' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='58' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='59' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='60' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                    </React.Fragment>
                </Grid>
                <Grid container item xs={12} spacing={0} style={isMobile ? {marginBottom: '-3.5px'}: {marginBottom: '-3px'}}>
                    <React.Fragment>
                        <Grid item xs={1}>
                            <PixelArt id='61' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='62' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler} modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='63' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='64' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='65' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='66' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='67' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='68' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='69' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='70' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='71' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='72' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                    </React.Fragment>
                </Grid>
                <Grid container item xs={12} spacing={0} style={isMobile ? {marginBottom: '-3.5px'}: {marginBottom: '-3px'}}>
                    <React.Fragment>
                        <Grid item xs={1}>
                            <PixelArt id='73' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='74' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='75' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='76' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='77' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='78' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='79' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='80' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='81' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='82' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='83' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='84' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                    </React.Fragment>
                </Grid>
                <Grid container item xs={12} spacing={0} style={isMobile ? {marginBottom: '-3.5px'}: {marginBottom: '-3px'}}>
                    <React.Fragment>
                        <Grid item xs={1}>
                            <PixelArt id='85' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='86' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='87' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='88' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='89' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='90' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='91' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='92' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='93' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='94' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='95' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='96' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                    </React.Fragment>
                </Grid>
                <Grid container item xs={12} spacing={0} style={isMobile ? {marginBottom: '-3.5px'}: {marginBottom: '-3px'}}>
                    <React.Fragment>
                        <Grid item xs={1}>
                            <PixelArt id='97' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='98' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='99' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='100' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='101' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='102' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='103' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='104' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='105' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='106' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='107' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='108' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                    </React.Fragment>
                </Grid>
                <Grid container item xs={12} spacing={0} style={isMobile ? {marginBottom: '-3.5px'}: {marginBottom: '-3px'}}>
                    <React.Fragment>
                        <Grid item xs={1}>
                            <PixelArt id='109' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='110' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='111' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='112' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='113' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='114' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='115' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='116' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='117' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='118' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='119' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='120' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                    </React.Fragment>
                </Grid>
                <Grid container item xs={12} spacing={0} style={isMobile ? {marginBottom: '-3.5px'}: {marginBottom: '-3px'}}>
                    <React.Fragment>
                        <Grid item xs={1}>
                            <PixelArt id='121' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='122' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='123' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='124' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='125' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='126' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='127' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='128' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='129' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='130' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='131' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='132' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                    </React.Fragment>
                </Grid>
                <Grid container item xs={12} spacing={0} style={isMobile ? {marginBottom: '-3.5px'}: {marginBottom: '-3px'}}>
                    <React.Fragment>
                        <Grid item xs={1}>
                            <PixelArt id='133' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='134' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='135' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='136' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='137' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='138' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='139' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='140' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='141' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='142' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='143' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='144' drawState={props.drawState} drawStateHandler={drawStateHandler} gridIdHandler={props.gridIdHandler}modal={props.modal} />
                        </Grid>
                    </React.Fragment>
                </Grid>
            </Grid>
        </div>
    );
}