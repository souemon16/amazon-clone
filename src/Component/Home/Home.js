import React from 'react';
import Product from '../Product/Product';
import './Home.css';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <div className="home_container">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt="Amazon Background" className="home_image" />

                <div className="home_row">
                    <Product 
                    id="1"
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price={13.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                    rating={5} />

                    <Product 
                    id="2"
                    title="Aucma Stand Mixer,6.5-QT 660W 6-Speed Tilt-Head Food Mixer, Kitchen Electric Mixer with Dough Hook, Wire Whip & Beater (6.5QT, Champagne)"
                    price={139.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/61ie0JOVmtL._AC_SX679_.jpg"
                    rating={4}/>
                </div>
                
                <div className="home_row">
                <Product
                id="3"
                 title="YAMAY Smart Watch, Watches for Men Women Fitness Tracker Blood Pressure Monitor Blood Oxygen Meter Heart Rate Monitor IP68 Waterproof, Smartwatch Compatible with iPhone Samsung Android Phones (Black)"
                 price={44.99}
                 image="https://images-na.ssl-images-amazon.com/images/I/51g0J2ZLH1L._AC_SX679_.jpg"
                 rating={3}
                />

                <Product
                id="4"
                title="Samsung Electronics Samsung Galaxy S21 5G | Factory Unlocked Android Cell Phone | US Version 5G Smartphone | Pro-Grade Camera, 8K Video, 64MP High Res | 128GB, Phantom Violet (SM-G991UZVAXAA)"
                price={799.99}
                image="https://images-na.ssl-images-amazon.com/images/I/81Kt5PSPtrL._AC_SY741_.jpg"
                rating={5} />

                <Product 
                id="5"
                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation)"
                price={999.99}
                image="https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SX466_.jpg"
                rating={5}/>
                </div>

                <div className="home_row">
                <Product 
                id="6"
                title="SAMSUNG 55-inch Class QLED Q80T Series - 4K UHD Smart TV with Alexa Built-in (QN55Q80TAFXZA, 2020 Model) + HW-Q800T 3.1.2ch Soundbar with Dolby Atmos/DTS:X and Alexa Built-in (2020)"
                price={339.99}
                image="https://images-na.ssl-images-amazon.com/images/I/8161gQWMnNL._AC_SX466_.jpg"
                rating={4}/>
                </div>
            </div>
        </div>
    );
};

export default Home;