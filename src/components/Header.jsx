import React from "react";
import "../styles/Header.css";

function Header() {
    return(
        <header>
            <img src="https://images.rawpixel.com/image_transparent_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtNTM1LWJvb2syLTA3YS5wbmc.png" alt="logo de libro" className="logo" />
            <nav className="navbar">
                <ul>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Productos</a></li>
                    <li><a href="">Nosotros</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;