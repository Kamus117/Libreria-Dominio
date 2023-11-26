// /src/context/MenuContext.jsx
import { createContext, useRef, useState, useEffect } from 'react';

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [isMenuOpen, setMenuOpen] = useState(window.innerWidth < 769);
    const menuButtonRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    // Actualiza el estado cuando el tamaño de la pantalla cambia
    useEffect(() => {
        const handleResize = () => {
            setMenuOpen(window.innerWidth < 769);
        };

        window.addEventListener('resize', handleResize);

        // Limpieza del event listener cuando el componente se desmonta
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <MenuContext.Provider value={{ isMenuOpen, toggleMenu, menuButtonRef }}>
            {children}
        </MenuContext.Provider>
    );
};

export default MenuContext;