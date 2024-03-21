import React, { useState } from 'react';
import './Navbar.css';
import logoone from '../Traches/logo/logoone.png'
import cart_site3 from '../Traches/logo/cart_site3.png'
import { Link } from 'react-router-dom';



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
                {/* <li onClick={()=>{setMenu("mens")}}><Link to='/men'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Woemns")}}><Link to='/Woemn'>Woemn</Link>{menu==="Woemns"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Kids")}}><Link to='/Kids'>Kids</Link>{menu==="Kids"?<hr/>:<></>}</li> */}
                <li onClick={()=>{setMenu("products")}}><Link style={{textDecoration: 'none'}} to='/products'>product</Link>{menu==="products"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/Cart'><img src={cart_site3} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
}

export default Navbar;
