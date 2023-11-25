import React, { useContext, useRef, useEffect } from "react";
import MenuContext from "../context/MenuContext";
import "../styles/Header.css";


function Header() {
    const { isMenuOpen, toggleMenu, menuButtonRef } = useContext(MenuContext);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (menuButtonRef.current && !menuButtonRef.current.contains(event.target)) {
                toggleMenu();
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isMenuOpen, toggleMenu]);

    return (
        <header>
            <img
                src="https://images.rawpixel.com/image_transparent_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtNTM1LWJvb2syLTA3YS5wbmc.png"
                alt="logo de libro"
                className="logo"
            />
            <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} ref={menuButtonRef}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <nav >
                <ul className={`navbar ${isMenuOpen ? 'open' : ''}`}>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/productos">Productos</a></li>
                    <li><a href="/nosotros">Nosotros</a></li>
                    <li><a href="/contacto">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;