import React from "react"

import "./style.css"
// React is one way data flow.  
// when you change data, UI gets rerendered automatically with new data.


function DropDown() {
    
    const [value, setValue] = React.useState(0) // its a function call in which u can pass initial value


    // const arr = [2, () => {}]

    // const [a, b] = arr
    
    console.log("rerendering", value)
    return (
        <div>
           <span>{value}</span>
           <button onClick={() => {
               setValue(value + 1)
           }}>Increment</button> 
        </div>

    )
}

export default DropDown