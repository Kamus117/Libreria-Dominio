import React from 'react';
import '../styles/AboutUs.css'

const AboutUs = () => {
    return (
        <main className='AboutUs'>
            <h1>Sobre Nosotros</h1>
            <div>
            <h2>¿Qué es Dominio?</h2>
            <p>
                La librería Dominio es un espacio literario y amante de la literatura, nuestro objetivo es brindar un catalogo rico en variedad al mejor precio.
            </p>
            </div>
            <div>
                <h2>¿Que significa Dominio</h2>
                <p>
                    En la novela de ciencia a ficción Halo, la especie avanzada ForeRunner crea una base de datos que abarca todo el conocimiento del universo y la dispone para el acceso ilimitado de su especie, de ahí elegimos el nombre Dominio.
                </p>
            </div>
            <div>
                <h2>¿Quienes Somos?</h2>
                <p>
                    Somos una pareja argentina amante de la literatura, vivimos en Boulogne Sur Mer. Esperamos este servicio pueda abrir las puertas de nuevas compañias para ustedes también. 
                </p>
            </div>
            <div>
                <h2>Dónde Encontrarnos </h2>
                <p>
                    Actualmente nuestro negocio se limita a la venta online, pero pronto dispondremos nuetro primer local, ¡siganos en redes para futuras actualizaciónes!
                </p>
            </div>

            <img src="https://m.media-amazon.com/images/I/41vE98jpXdL._AC_UF894,1000_QL80_.jpg" alt="pareja de lectores" />
        </main>
    );
};

export default AboutUs;