import React from 'react';
import './Product.css';
import StarRateIcon from '@material-ui/icons/StarRate';
import { useStateValue } from '../../StateProvider';

const Product = ({ title, image, price, rating }) => {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch the item into the data layer 
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {

                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((_, i) => (
                        <StarRateIcon />
                    ))}
                </div>
            </div>
            <img src={image} alt="Amazon Products" />
            <button onClick={addToBasket}> Add To Basket </button>
        </div>
    );
};

export default Product;