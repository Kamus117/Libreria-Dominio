import React, { useState } from "react";
import '../styles/Contact.css'

const Contact = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iterearemos la logica supongo.
        console.log('Formulario enviado:', formData);
    };

    return (
        <section className="form-container">
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Apellido:
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Correo Electrónico:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Asunto:
                    <textarea name="subject" value={formData.subject} onChange={handleChange} />
                </label>
                <br />
                <label>

                    <b>
                        Aceptación de Términos

                    </b>

                    <p>
                        Al acceder y utilizar DOMINIO, aceptas y te comprometes a cumplir con estos términos y condiciones. Si no estás de acuerdo con alguna parte de estos términos, te recomendamos que no utilices nuestros servicios.

                    </p>

                    <b>
                        Uso del Sitio
                    </b>

                    <p>
                        DOMINIO te concede un permiso limitado para acceder y hacer uso personal del sitio. No puedes descargar ni modificar ninguna parte del sitio sin el consentimiento expreso por escrito de DOMINIO.
                    </p>

                    <b>
                        Registro de Cuenta
                    </b>

                    <p>
                        Para acceder a ciertas funciones de nuestro sitio, es posible que debas registrarte y crear una cuenta. Aceptas proporcionar información precisa y completa durante el proceso de registro y actualizarla para mantenerla precisa y actualizada.

                    </p>

                    <b>
                        Privacidad
                    </b>


                    <p>
                        El uso de DOMINIO está sujeto a nuestra política de privacidad. Al aceptar estos términos, también aceptas nuestra política de privacidad, que puedes revisar en enlace a la política de privacidad.
                    </p>

                    <div className="check">
                        <p>He Leído y Acepto los terminos y condiciones:</p>
                        <input type="checkbox" name="" id="" />
                    </div>

                </label>
                <button type="submit">Enviar</button>
            </form>
        </section>
    );
};

export default Contact;