import React from "react";
import logo from '../images/logo.png';

const Header = () => {
    return (
        <header>
            <div className="brand">
                <img src={logo} alt="SakuraFusion Lounge Logo" className="logo"/>
                <div>
                    <h1>SakuraFusion Lounge</h1>
                    <p>Where Tradition Meets Temptation in Every Bite!</p>
                </div>
            </div>
        </header>
    )
}

export default Header;