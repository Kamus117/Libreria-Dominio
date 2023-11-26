import React, { useState } from "react";
import ReactDOM from "react";

import Header from '../components/Header.jsx'
import Contact from "../components/Contact.jsx";
import Footer from '../components/Footer.jsx'
import '../index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MenuProvider } from '../context/MenuContext';


const ContactScreen = () => {
    return (
        <MenuProvider>
            <>
                <Header />
                <Contact />
                <Footer />
            </>
        </MenuProvider>
    );
};

export default ContactScreen;