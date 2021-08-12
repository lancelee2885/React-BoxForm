import React from "react";

function Box ({width, height, backgroundColor}) {
  console.log("###########", {width, height, backgroundColor})
  return (
    <div style={{width: width+"px", height:height+"px", backgroundColor:backgroundColor}}>


    </div>
  )
}

export default Box;