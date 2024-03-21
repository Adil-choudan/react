import React from 'react';
import { Link } from 'react-router-dom';

const ProductPage = () => {
    return (
        <div>
            <h1>Products</h1>
            <ul>
                <li><Link style={{textDecoration: 'none'}} to="/products/men">Men's Clothing</Link></li>
                <li><Link style={{textDecoration: 'none'}} to="/products/women">Women's Clothing</Link></li>
                <li><Link style={{textDecoration: 'none'}} to="/products/kids">Kids' Clothing</Link></li>
            </ul>
        </div>
    );
}

export default ProductPage;
