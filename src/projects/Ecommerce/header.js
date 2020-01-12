import React from "react"
import "./header.css"
import {
    HeaderContainer
} from "./styled"

function Header() {
    return (
        <HeaderContainer className="container-fluid header-bg">
            <div className="container">
                <ul className="top-header">
                    <li><a href="#">flipKart</a></li>
                    <li class="serch-box"><input type='text' placeholder='search...' /><span><i class="fa fa-search"></i></span></li>
                    <li><a href="#">Log in\Sign up</a></li>
                    <li><a href='#'>More</a></li>
                    <li><a href='#'><span><i class="fa fa-shopping-cart"></i></span>Cart</a></li>
                </ul>
            </div>
        </HeaderContainer>
    )
}

export default Header