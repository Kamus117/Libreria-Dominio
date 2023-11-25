import React, { useState } from "react";
import ReactDOM from "react";

import Header from '../components/Header.jsx'
import AboutUs from "../components/AboutUs.jsx";
import Footer from '../components/Footer.jsx'
import '../index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MenuProvider } from '../context/MenuContext';


const AboutScreen = () => {
    return (
        <MenuProvider>
            <>
                <Header />
                <AboutUs />
                <Footer />
            </>
        </MenuProvider>
    );
};

export default AboutScreen;