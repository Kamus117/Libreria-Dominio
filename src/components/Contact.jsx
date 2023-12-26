import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import '../styles/Contact.css';

const Contact = () => {
    const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);

    const openSuccessModal = () => {
        setSuccessModalOpen(true);
    };

    const closeSuccessModal = () => {
        setSuccessModalOpen(false);
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required("El nombre es requerido"),
        lastName: Yup.string().required("El apellido es requerido"),
        email: Yup.string().email("Formato de correo electrónico inválido").required("El correo electrónico es requerido"),
        subject: Yup.string().required("El asunto es requerido"),
        termsAndConditions: Yup.boolean().oneOf([true], "Debes aceptar los términos y condiciones"),
    });

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            termsAndConditions: false,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            openSuccessModal();
            // Puedes realizar otras acciones aquí, como enviar datos al servidor si es necesario.
        },
    });

    return (
        <section className="form-container">
            <form onSubmit={formik.handleSubmit}>
                <label>
                    Nombre:
                    <input type="text" name="firstName" value={formik.values.firstName} onChange={formik.handleChange} />
                    {formik.errors.firstName && <div className="error">{formik.errors.firstName}</div>}
                </label>
                <br />
                <label>
                    Apellido:
                    <input type="text" name="lastName" value={formik.values.lastName} onChange={formik.handleChange} />
                    {formik.errors.lastName && <div className="error">{formik.errors.lastName}</div>}
                </label>
                <br />
                <label>
                    Correo Electrónico:
                    <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} />
                    {formik.errors.email && <div className="error">{formik.errors.email}</div>}
                </label>
                <br />
                <label>
                    Asunto:
                    <textarea name="subject" value={formik.values.subject} onChange={formik.handleChange} />
                    {formik.errors.subject && <div className="error">{formik.errors.subject}</div>}
                </label>
                <br />
                <label>
                    <b>Aceptación de Términos</b>
                    <p>Al acceder y utilizar DOMINIO, aceptas y te comprometes a cumplir con estos términos y condiciones. Si no estás de acuerdo con alguna parte de estos términos, te recomendamos que no utilices nuestros servicios.</p>
                    <div className="check">
                        <p>He Leído y Acepto los términos y condiciones:</p>
                        <input
                            type="checkbox"
                            name="termsAndConditions"
                            id="termsAndConditions"
                            checked={formik.values.termsAndConditions}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.termsAndConditions && <div className="error">{formik.errors.termsAndConditions}</div>}
                    </div>
                </label>
                <button type="submit">Enviar</button>
            </form>

            {/* Modal de éxito */}
            {isSuccessModalOpen && (
                <div className="modal-overlay">
                    <div className="success-modal">
                        <h2>Mensaje Enviado</h2>
                        <p>Gracias por contactarnos. Hemos recibido tu mensaje con éxito.</p>
                        <button onClick={closeSuccessModal}>Cerrar</button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contact;