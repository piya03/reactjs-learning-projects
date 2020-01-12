import React from "react"

import "./card.css"
// React is one way data flow.  
// when you change data, UI gets rerendered automatically with new data.


function Card(props) {
    const { eachElem } = props
    console.log(eachElem, "eachelemt")
    const [data, setData] = React.useState(eachElem)
    // {
    //     img:  "https://img.etimg.com/thumb/msid-70101475,width-643,imgsize-366669,resizemode-4/skechers-gorun-7-helps-in-easy-foot-movement-and-provides-great-support-.jpg",
    //     disc: "men shoes",
    //     price: "1000 Rs",
    //     color: "green"
    // }
    // const [img, setImg] = React.useState('https://img.etimg.com/thumb/msid-70101475,width-643,imgsize-366669,resizemode-4/skechers-gorun-7-helps-in-easy-foot-movement-and-provides-great-support-.jpg')
    // const [disc, setDics] = React.useState("men shoes")
    // const [price, setPrice] = React.useState("1000 Rs.")
    // const [color, setColor] = React.useState("green")
    const { img, disc, price, color, size , brand } = data
    return (
        <div className='cardBox'>
            <div className='circle' style={{ backgroundColor: color }} onClick={() => {
                if (color === "green") {
                    setData({
                        ...data,
                        color: 'red'
                    })
                } else {
                    setData({
                        ...data,
                        color: "green"
                    })
                }
            }}></div>
           
            <div className='imgBox'>
                <img src={img} />
            </div>
            <div className="card-bottom">
                <div className="brand">{brand}</div>
                <div className='discription'>{disc}</div>
                <div className='price'>{price}</div>
                <div className='size'><span className="text-size">Size </span>{size}</div>
            </div>
        </div>

    )
}

export default Card