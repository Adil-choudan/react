import React, { useState } from 'react';
import './Navbar.css';
import logoone from '../Traches/logo/logoone.png'
import { Link } from 'react-router-dom';
import cart_icon from '../Compenent/Assets/cart_icon.png'



const Navbar = () => {
    
    const [menu,setMenu] = useState("Shop");


    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logoone} alt="" />
                <p>Shouart</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("Shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration: 'none'}} to='/men'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Womens")}}><Link style={{textDecoration: 'none'}} to='/women'>Women</Link>{menu==="Womens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Kids")}}><Link style={{textDecoration: 'none'}} to='/Kids'>Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/Cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
}

export default Navbar;
