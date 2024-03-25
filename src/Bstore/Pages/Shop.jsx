import React from 'react';
import Hero from '../Compenent/Heror/Hero';
import Popular from '../Compenent/popular/Popular';
import Offers from '../Compenent/Offers/Offers';
import Newcollections from '../Compenent/Newcollections/Newcollections';
import NewsLatter from '../Compenent/NewsLatter/NewsLatter';


const Shop = () => {
    return (
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <Newcollections/>
            <NewsLatter/>
        </div>
    );
}

export default Shop;
