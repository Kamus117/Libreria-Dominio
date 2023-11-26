import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa el enrutador y otros componentes necesarios
import HomeScreen from './screens/HomeScreen.jsx'
import AboutScreen from './screens/AboutScreen.jsx'
import ShopScreen from './screens/ShopScreen.jsx'
import ContactScreen from './screens/ContactScreen.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/nosotros' element={<AboutScreen />} />
        <Route path='/tienda' element={<ShopScreen />} />
        <Route path='/contacto' element={<ContactScreen />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
