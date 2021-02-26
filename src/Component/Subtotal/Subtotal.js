import React, { useState } from 'react';
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from '../../reducer';
import { useStateValue } from '../../StateProvider';

const Subtotal = () => {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat renderText={(value) => (
                <>
                <p>
                    Subtotal ({basket.length} items):
                    <strong>{value}</strong>
                </p>
                <small className="subtotal_gift">
                    <input type="checkbox" name="gift" id="gift"/> This order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />

            <button> Proceed to Checkout </button>
        </div>
    );
};

export default Subtotal;