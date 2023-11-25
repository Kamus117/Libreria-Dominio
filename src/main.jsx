import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Popular from './components/Popular.jsx'
import Footer from './components/Footer.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa el enrutador y otros componentes necesarios
import HomeScreen from './screens/HomeScreen.jsx'
import AboutScreen from './screens/AboutScreen.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/nosotros' element={<AboutScreen />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
