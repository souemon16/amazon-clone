import React from 'react';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import Header from '../Header/Header';
import Subtotal from '../Subtotal/Subtotal';
import './Checkout.css';

const Chekcout = () => {
        const [{basket, user}, dispatch] = useStateValue();
    return (
        <>
        <Header />
        <div className="checkout">
            <div className="checkout_left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout_ad"/>
                <div>
                    <h3>Hello, {user?.email} </h3>
                    <h2 className="checkout_title">Your Shopping Basket</h2>

                    {basket.map(item => (
                        <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        rating={item.rating}
                        price={item.price}
                        />
                    ))}
                </div>
            </div>

            <div className="checkout-right">
                <Subtotal />
            </div>
        </div>
        </>
    );
};

export default Chekcout;