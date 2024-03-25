import React from 'react';
import NavBar from './Bstore/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Shop from './Bstore/Pages/Shop';
import Cart from './Bstore/Pages/Cart';
import Loginsingin from './Bstore/Pages/Loginsignin';
import Footer from './Bstore/Compenent/Footer/Footer';
import Shopcategory from './Bstore/Pages/Shopcategory';
import Product from './Bstore/Pages/Product';
import men_banner from './Bstore/Compenent/Assets/banner_mens.png'
import women_banner from './Bstore/Compenent/Assets/banner_women.png'
import kid_banner from './Bstore/Compenent/Assets/banner_kids.png'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path='/' element={<Shop/>}/>
                    <Route path='/men' element={<Shopcategory banner={men_banner} category="men"/>}/>
                    <Route path='/women' element={<Shopcategory banner={women_banner} category="women"/>}/>
                    <Route path='/kids' element={<Shopcategory banner={kid_banner} category="kid"/>}/>
                    <Route path='/proudact' element={<Product/>}>
                        <Route path=':proudactId' element={<Product/>}/>
                    </Route>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/login' element={<Loginsingin/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
