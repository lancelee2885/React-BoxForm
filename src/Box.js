import React from "react";

/** 
 *  renders a box onto the DOM 
 * inputs {width, height, backgroundColor, id, removeBox}
 * Wheras removeBox is a fn rec'd from parent to remove from state
 * */
function Box ({width, height, backgroundColor, id, removeBox}) {
  return (
    <div  style={{width: width+"px", height:height+"px", backgroundColor:backgroundColor}}>

      <button id={id} onClick={removeBox}>X</button>
    </div>
  )
}

export default Box;