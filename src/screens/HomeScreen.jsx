import React from "react";
import ReactDOM from "react";

import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import Popular from '../components/Popular.jsx'
import Footer from '../components/Footer.jsx'
import '../index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const HomeScreen = () => {
    return (
        <>
            <Header></Header>
            <Hero></Hero>
            <Popular></Popular>
            <Footer></Footer>
        </>
    )
}

export default HomeScreen