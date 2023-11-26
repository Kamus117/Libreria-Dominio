import React, { useState } from "react";
import ReactDOM from "react";

import Header from '../components/Header.jsx'
import Shop from "../components/Shop.jsx";
import Footer from '../components/Footer.jsx'
import '../index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MenuProvider } from '../context/MenuContext';


const ShopScreen = () => {
    return (
        <MenuProvider>
            <>
                <Header />
                <Shop/>
                <Footer />
            </>
        </MenuProvider>
    );
};

export default ShopScreen;