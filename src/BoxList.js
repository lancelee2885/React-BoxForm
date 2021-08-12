import React, { useState } from "react";
import BoxForm from "./NewBoxForm";
import Box from "./Box";
import { v4 as uuid } from 'uuid';

/**
 * Props:
 * 
 * State:
 */

function BoxList() {

  const [boxes, setBoxes] = useState([]);

  function renderBoxes() {
    return (

      boxes.map(box =>
        <div key={box.id}>
          <Box width={box.width} height={box.height} backgroundColor={box.backgroundColor} />
        </div>
      ))
  }

  function addBox(box) {
    let newBox = { ...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  }

  return (
    <div className="BoxList">
      <BoxForm addBox={addBox} />
      {renderBoxes()}
    </div>
  )
}

export default BoxList;