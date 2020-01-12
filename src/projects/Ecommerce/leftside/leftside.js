import React from "react"
import Accordion from "../../common/Accordion"
import Brand from "./brand.js"
import "./leftside.css"



// function Accordion(props) {
//     const [open, setOpen] = React.useState(false)
//     const { heading, containerClass } = props
//     // console.log(props.children)
//     return (
//         <>
//             <div className={containerClass}
//                 onClick={(e) => {
//                     setOpen(!open)
//                 }}
//             ><i class="fa fa-angle-down"></i>{heading}</div>
//             {open && props.children
//             }
//         </>
//     )
// }


function Leftside() {


    return (
        <div className="leftside">
            <h5>Filters</h5>
            <div className="categories">
                <p> CATEGORIES</p>
                <Accordion heading="Footwear" containerClass='footwear-text'>
                    <ul className="footwear-categories">
                        <li><a href='#'>Women's Footwear</a></li>
                        <li><a href='#'>Kids' & Infant Footwear</a></li>
                        <li><a href='#'>Men's Footwear</a></li>
                    </ul>

                </Accordion>
            </div>

            {/* /////////// */}
            <div className="price-categories">
                <div className="price-text">
                    <div>PRICE</div>
                    <span>CLEAR</span>
                </div>
                <div className="input-range">
                    <input type="range" name="points" min="0" max="10" />
                </div>
                <div className='select-box'>
                    <select>
                        <option value="Min">Min</option>
                        <option value="500">₹500</option>
                    </select>
                    <span>To</span>
                    <select>
                        <option value="500">₹500</option>
                        <option value="1000">₹1000</option>
                        <option value="1500">₹1500</option>
                        <option value="2000">₹2000</option>
                        <option value="3000">₹3000</option>
                        <option value="Max">₹3000+</option>
                    </select>
                </div>
            </div>
            {/* /////////////////// */}
            <Brand />
        </div>
    )






}

export default Leftside