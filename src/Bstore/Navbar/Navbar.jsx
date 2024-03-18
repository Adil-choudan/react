import React, { useState } from 'react';
import './Navbar.css';
import logoone from '../Traches/logo/logoone.png'
import cart_site3 from '../Traches/logo/cart_site3.png'



const Navbar = () => {
    
    const [menu,setMenu] = useState("Home");


    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logoone} alt="" />
                <p>GIT SOM</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("Home")}}>Home{menu==="Home"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Products")}}>Product{menu==="Products"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("New")}}>New{menu==="New"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img src={cart_site3} alt="" />
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
}

export default Navbar;
