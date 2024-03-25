

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

// import Appcomp from './examtest/Appcomp';
import App from './App';
import ShopContextProvider from './Bstore/Context/ShopContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ShopContextProvider>
        <App />
    </ShopContextProvider>
);