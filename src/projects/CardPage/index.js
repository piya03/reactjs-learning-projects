import React from "react"
import Card from "../Card/card"
import "./cardpage.css"
// React is one way data flow.  
// when you change data, UI gets rerendered automatically with new data.

const ServerCardData = [{
    img: "https://img.etimg.com/thumb/msid-70101475,width-643,imgsize-366669,resizemode-4/skechers-gorun-7-helps-in-easy-foot-movement-and-provides-great-support-.jpg",
    disc: "men shoes",
    price: "1000 Rs",
    color: "green",
    size: "5,6,7,8",
    brand: "ADIDAS"
},
{
    img: "https://rukminim1.flixcart.com/image/580/696/jxc5a4w0/shoe/5/9/u/19032608-11-puma-black-white-firecracker-original-imafbkzdvrbmmgfv.jpeg?q=50",
    disc: "men shoes",
    price: "1000 Rs",
    color: "green",
    size: "5,6,7,8",
    brand: "ADIDAS"

},
{
    img: "https://rukminim1.flixcart.com/image/580/696/jvif0y80/shoe/s/m/h/2044519-9-puma-red-original-imafgdpzgthqszfp.jpeg?q=50",
    disc: "men shoes",
    price: "1000 Rs",
    color: "green",
    size: "5,6,7,8",
    brand: "Puma"

},
{
    img: "https://img.etimg.com/thumb/msid-70101475,width-643,imgsize-366669,resizemode-4/skechers-gorun-7-helps-in-easy-foot-movement-and-provides-great-support-.jpg",
    disc: "men shoes",
    price: "1000 Rs",
    color: "green",
    size: "5,6,7,8",
    brand: "Nike"
},
{
    img: "https://img.etimg.com/thumb/msid-70101475,width-643,imgsize-366669,resizemode-4/skechers-gorun-7-helps-in-easy-foot-movement-and-provides-great-support-.jpg",
    disc: "men shoes",
    price: "1000 Rs",
    color: "green",
    size: "5,6,7,8",
    brand: "Nike"

},
{
    img: "https://img.etimg.com/thumb/msid-70101475,width-643,imgsize-366669,resizemode-4/skechers-gorun-7-helps-in-easy-foot-movement-and-provides-great-support-.jpg",
    disc: "men shoes",
    price: "1000 Rs",
    color: "green",
    size: "5,6,7,8,9,10,11",
    brand: "REEBOK"

},
{
    img: "https://img.etimg.com/thumb/msid-70101475,width-643,imgsize-366669,resizemode-4/skechers-gorun-7-helps-in-easy-foot-movement-and-provides-great-support-.jpg",
    disc: "men shoes",
    price: "4000 Rs",
    color: "green",
    size: "6,7,8,10",
    brand: "REEBOK"

}]
function CardPage() {


    return (
        <div className='card-page'>
            {ServerCardData.map((e, index) => {
                return (
                    <Card key={index} eachElem={e} />
                )
            })}


        </div>

    )
}

export default CardPage

