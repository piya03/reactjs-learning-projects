import React from "react"
import "./button3.css"

function Button3(props){
    const {eachelem} = props
    console.log(eachelem)
    const [data, setData] = React.useState(eachelem)

    const {disc, color,backgroundColor} = data

    return(
        <div className="buttonBox">
            <button style ={{backgroundColor: backgroundColor, color:color}}
            onClick={() =>{
                if(backgroundColor === "red"){
                    setData({
                        ...data,
                        backgroundColor:'yellow',
                        color:'black'
                    })
                }
                else{
                    setData({
                        ...data,
                        backgroundColor:'red',
                        color:'white'
                    })
                }
            }}>{disc}</button>
        </div>
    )
}

export default Button3