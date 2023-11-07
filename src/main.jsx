import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Popular from './components/Popular.jsx'
import Footer from './components/Footer.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Header></Header>
    <Hero></Hero>
    <Popular></Popular>
    <Footer></Footer>

  </React.StrictMode>,
)
