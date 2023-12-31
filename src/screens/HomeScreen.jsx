import React, { useState } from "react";
import ReactDOM from "react";

import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import Popular from '../components/Popular.jsx'
import Footer from '../components/Footer.jsx'
import '../index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MenuProvider } from '../context/MenuContext';


const HomeScreen = () => {
    return (
        <MenuProvider>
            <>
                <Header />
                <Hero />
                <Popular />
                <Footer />
            </>
        </MenuProvider>
    );
};

export default HomeScreen;