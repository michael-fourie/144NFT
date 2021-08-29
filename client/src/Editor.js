import React, { useState } from "react";
import Button from '@material-ui/core/Button'
import "./editor.scss";
import { ChromePicker } from "react-color";
import DrawingPanel from "./DrawingPanel";

export default function Editor(props) {
  const [panelWidth, setPanelWidth] = useState(32);
  const [panelHeight, setPanelHeight] = useState(32);
  const [hideOptions, setHideOptions] = useState(true);
  const [hideDrawingPanel, setHideDrawingPanel] = useState(false);
  const [buttonText, setButtonText] = useState("start drawing");
  const [selectedColor, setColor] = useState("#000000");


  function changeColor(color) {
    setColor(color.hex);
  }

  return (
    <div>
        <Button onClick={props.action} variant="contained" color='#f9f9f9' style={{ fontFamily: 'VT323', fontSize: 24, color: 'black', marginTop: '25px', marginLeft: '25px'}}>Back</Button>
        <h1 id="introText">Draw the NFT you've always wanted</h1>
        <h1 id="introText">Grid #number</h1>
      <div id="editor">
        {hideOptions && (
          <ChromePicker color={selectedColor} disableAlpha='true' onChangeComplete={changeColor} />
        )}
        <br></br>
        {hideOptions && (
          <DrawingPanel
            width={panelWidth}
            height={panelHeight}
            selectedColor={selectedColor}
          />
        )}
      </div>
    </div>
  );
}