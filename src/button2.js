import React from "react"

function Button2(props) {
      
   function show(e){
        console.log(props.bgColor,"props.bgColor")
    } 
    return (
        <button style={{backgroundColor: props.bgColor}} onClick={show}>Hello Anil Kumar Chaudhary</button>
    )
    }

export default Button2