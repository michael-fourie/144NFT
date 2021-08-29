import React, { useRef } from "react";
import "./drawingPanel.scss";
import Row from "./Row";
import { exportComponentAsPNG } from "react-component-export-image";
import { Button } from "@material-ui/core";

export default function DrawingPanel(props) {
  const { width, height, selectedColor } = props;

  const panelRef = useRef();

  let rows = [];

  for (let i = 0; i < height; i++) {
    rows.push(<Row key={i} width={width} selectedColor={selectedColor} />);
  }

  return (
    <div id="drawingPanel">
      <div id="pixels" ref={panelRef}>
        {rows}
      </div>
      <Button variant="contained" color='#f9f9f9' size='large' onClick={() => exportComponentAsPNG(panelRef)} className="button">
        Mint NFT
      </Button>
    </div>
  );
}
