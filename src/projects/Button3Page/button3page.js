import React from "react"
import Button3 from "../Button3/button3"
import "./button3page.css"


const serverButtonData = [
    {
        disc: "hello world1",
        backgroundColor: "red",
        color: "green"
    },
    {
        disc: "hello world2",
        backgroundColor: "red",
        color: "green"
    }, {
        disc: "hello world3",
        backgroundColor: "red",
        color: "green"
    }, {
        disc: "hello world4",
        backgroundColor: "red",
        color: "green"
    }, {
        disc: "hello world5",
        backgroundColor: "red",
        color: "green"
    }, {
        disc: "hello world6",
        backgroundColor: "red",
        color: "green"
    }, {
        disc: "hello world7",
        backgroundColor: "red",
        color: "green"
    }
]
function Button3Page() {
    return (
        <div className='buttonPage'>
            {serverButtonData.map((elem, index) => {
                return (
                    <Button3 key={index} eachelem={elem} />
                )
            })}



        </div>
    )

}
export default Button3Page