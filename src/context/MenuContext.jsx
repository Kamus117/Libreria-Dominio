// /src/context/MenuContext.jsx
import { createContext, useRef, useState } from 'react';


const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const menuButtonRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <MenuContext.Provider value={{ isMenuOpen, toggleMenu, menuButtonRef }}>
            {children}
        </MenuContext.Provider>
    );
};

export default MenuContext;