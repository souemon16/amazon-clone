import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import Header from '../Header/Header';
import './Payment.css';

const Payment = () => {
    const [{basket, user}, dispatch] = useStateValue();
    return (
        <>
        <Header />
        <div className="payment">
            <div className="payment_container">
                <h1>Checkout(<Link to="/checkout">{basket?.length}</Link>)</h1>
                {/* Payment Section - Delivery Address  */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>213 React Lane</p>
                        <p>Los Angeles, CA.</p>
                    </div>
                </div>
                {/* Payment Section - Review Items  */}
                <div className="payment_section">
                <div className="payment_title">
                        <h3>Review Items and Delivery</h3>
                </div>
                <div className="payment_items">
                {basket.map(item => (
                    <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
                </div>
                </div>
                {/* Payment Section - Payment method  */}
                <div className="payment_section">
                <div className="payment_title">
                        <h3>Payment Method</h3>
                </div>
                <div className="payment_details">

                </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Payment;