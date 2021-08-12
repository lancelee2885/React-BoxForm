import React, { useState } from "react";
import BoxForm from "./NewBoxForm";
import Box from "./Box";
import { v4 as uuid } from 'uuid';

/**
 * State: list of boxes [{height,width, backggroundColor, id, removebox},.... ]
 * Boxlist -> NewBoxForm
 */

function BoxList() {

  const [boxes, setBoxes] = useState([]);

  function renderBoxes() {
    return (

      boxes.map(box =>
        <div key={box.id}>
          <Box width={box.width} height={box.height} 
          backgroundColor={box.backgroundColor} id={box.id}
          removeBox={removeBox} />
        </div>
      ))
  }

  // add a Box to state
  function addBox(box) {
    let newBox = { ...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  }

  // removes Box from state
  function removeBox(evt){
    let newBoxList = boxes.map( (oldBox) => {return {...oldBox}} )
    newBoxList = newBoxList.filter( currentBox => currentBox.id !== evt.target.id )
    setBoxes(newBoxList)
  }

  return (
    <div className="BoxList">
      <BoxForm addBox={addBox} />
      {renderBoxes()}
    </div>
  )
}

export default BoxList;