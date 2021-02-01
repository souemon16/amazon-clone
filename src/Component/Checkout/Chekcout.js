import React from 'react';
import Subtotal from '../Subtotal/Subtotal';
import './Checkout.css';

const Chekcout = () => {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout_ad"/>
                <div>
                    <h2 className="checkout_title">Your Shopping Basket</h2>
                </div>
            </div>

            <div className="checkout-right">
                <Subtotal />
            </div>
        </div>
    );
};

export default Chekcout;