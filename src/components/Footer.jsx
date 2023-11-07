import React from "react";
import '../styles/Footer.css'

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <p>©{new Date().getFullYear()} Dominio Librerias</p>
                <div className="social-icons">
                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#"><i className="fa-solid fa-envelope"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;