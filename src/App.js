import React from 'react';
import NavBar from './Bstore/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './Bstore/Pages/Shop';
import ProductPage from './Bstore/Pages/ProductPage';
import Cart from './Bstore/Pages/Cart';
import Loginsingin from './Bstore/Pages/Loginsignin';

const App = () => {
    return (
        <div>
            <Router>
                <NavBar/>
                <Routes>
                    <Route path='/' element={<Shop/>}/>
                    <Route path='/products' element={<ProductPage/>}/> {/* إضافة المسار الجديد هنا */}
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/login' element={<Loginsingin/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
