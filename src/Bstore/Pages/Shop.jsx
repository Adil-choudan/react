import React from 'react';
import Hero from '../Compenent/Heror/Hero';
import Popular from '../Compenent/popular/Popular';
import Offers from '../Compenent/Offers/Offers';
import Newcollections from '../Compenent/Newcollections/Newcollections';

const Shop = () => {
    return (
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <Newcollections/>
        </div>
    );
}

export default Shop;
