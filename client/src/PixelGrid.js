import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { blue } from '@material-ui/core/colors';
import test_img from './img/test-img.png'
import PixelArt from './PixelArt'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '80%',
        height: '80%',
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

    return (
        <div className={classes.root} >
            <Grid container spacing={0}>
                <Grid container item xs={12} spacing={0}>
                    <React.Fragment>
                        <Grid item xs={1}>
                            <PixelArt id='1' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='2'action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='3'action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='4'action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='5'action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='6'action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='7'action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='8'action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='9'action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='10'action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='11'action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='12'action={props.action}/>
                        </Grid>
                    </React.Fragment>
                </Grid>
                <Grid container item xs={12} spacing={0}>
                    <React.Fragment>
                        <Grid item xs={1}>
                            <PixelArt id='13' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='14' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='15' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='16' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='17' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='18' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='19' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='20' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='21'action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='22' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='23' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='24'action={props.action}/>
                        </Grid>
                    </React.Fragment>
                </Grid>
                <Grid container item xs={12} spacing={0}>
                    <React.Fragment>
                        <Grid item xs={1}>
                            <PixelArt id='25' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='26' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='27' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='28' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='29' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='30' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='31' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='32' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='33' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='34' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='35' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='36' action={props.action}/>
                        </Grid>
                    </React.Fragment>
                </Grid>
                <Grid container item xs={12} spacing={0}>
                    <React.Fragment>
                        <Grid item xs={1}>
                            <PixelArt id='37' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='38' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='39' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='40' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='41' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='42' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='43' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='44' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='45' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='46' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='47' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='48' action={props.action}/>
                        </Grid>
                    </React.Fragment>
                </Grid>
                <Grid container item xs={12} spacing={0}>
                    <React.Fragment>
                        <Grid item xs={1}>
                            <PixelArt id='49' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='50' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='51' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='52' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='53' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='54' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='55' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='56' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='57' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='58' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='59' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='60' action={props.action}/>
                        </Grid>
                    </React.Fragment>
                </Grid>
                <Grid container item xs={12} spacing={0}>
                    <React.Fragment>
                        <Grid item xs={1}>
                            <PixelArt id='61' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='62' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='63' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='64' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='65' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='66' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='67' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='68' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='69' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='70' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='71' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='72' action={props.action}/>
                        </Grid>
                    </React.Fragment>
                </Grid>
                <Grid container item xs={12} spacing={0}>
                    <React.Fragment>
                        <Grid item xs={1}>
                            <PixelArt id='73' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='74' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='75' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='76 action={props.action}'/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='77' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='78' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='79' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='80' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='81' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='82' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='83' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='84' action={props.action}/>
                        </Grid>
                    </React.Fragment>
                </Grid>
                <Grid container item xs={12} spacing={0}>
                    <React.Fragment>
                        <Grid item xs={1}>
                            <PixelArt id='85' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='86' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='87' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='88' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='89' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='90' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='91' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='92' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='93' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='94 ' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='95' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='96' action={props.action}/>
                        </Grid>
                    </React.Fragment>
                </Grid>
                <Grid container item xs={12} spacing={0}>
                    <React.Fragment>
                        <Grid item xs={1}>
                            <PixelArt id='97' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='98' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='99' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='100' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='101' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='102' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='103' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='104' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='105' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='106' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='107' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='108' action={props.action}/>
                        </Grid>
                    </React.Fragment>
                </Grid>
                <Grid container item xs={12} spacing={0}>
                    <React.Fragment>
                        <Grid item xs={1}>
                            <PixelArt id='109' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='110' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='111' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='112' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='113' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='114' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='115' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='116' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='117' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='118' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='119' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='120' action={props.action}/>
                        </Grid>
                    </React.Fragment>
                </Grid>
                <Grid container item xs={12} spacing={0}>
                    <React.Fragment>
                        <Grid item xs={1}>
                            <PixelArt id='121' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='122' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='123' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='124' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='125' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='126' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='127' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='128' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='129' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='130' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='131' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='132' action={props.action}/>
                        </Grid>
                    </React.Fragment>
                </Grid>
                <Grid container item xs={12} spacing={0}>
                    <React.Fragment>
                        <Grid item xs={1}>
                            <PixelArt id='133' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='134' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='135' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='136' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='137' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='138' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='139' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='140' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='141' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='142' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='143' action={props.action}/>
                        </Grid>
                        <Grid item xs={1}>
                            <PixelArt id='144' action={props.action}/>
                        </Grid>
                    </React.Fragment>
                </Grid>
            </Grid>
        </div>
    );
}