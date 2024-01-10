//Shop.jsx
import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import data from "../data/allBoks";
import FilterButtons from "./FliterButtons";
import '../styles/Shop.css'
import CartModal from './CartModal';


const Shop = () => {
    const [filteredCategory, setFilteredCategory] = useState(null);
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem(`cartItems`))) || useState([]);
    const [isModalOpen, setModalOpen] = useState(false);


    useEffect(() => {
        // Recupera el carrito del localStorage al cargar la página
        const storedCart = localStorage.getItem("cartItems");
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []);

    useEffect(() => {
        // Guarda el carrito en el localStorage después de cada modificación
        console.log(`guardado`)
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);


    const addToCart = (book) => {
        // Busca si el libro ya está en el carrito
        const existingItemIndex = cartItems.findIndex((item) => item.id === book.id);


        if (existingItemIndex !== -1) {
            // Si el libro ya está en el carrito, actualiza la cantidad
            setCartItems((prevItems) =>
                prevItems.map((item, index) =>
                    index === existingItemIndex
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            // Si el libro no está en el carrito, agrégalo con cantidad 1
            setCartItems((prevItems) => [...prevItems, { ...book, quantity: 1 }]);
        }
    };

    const cartLength = () =>{
        console.log(cartItems.length)
        if(cartItems.length!=0){
            return cartItems.length
        }
        else{
            return 0
        }
    }

    const updateQuantity = (item, action) => {
        setCartItems((prevItems) =>
            prevItems.map((prevItem) =>
                prevItem.id === item.id
                    ? {
                        ...prevItem,
                        quantity:
                            action === 'add' ? prevItem.quantity + 1 : prevItem.quantity - 1,
                    }
                    : prevItem
            )
        );
    };

    const removeFromCart = (itemId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    };

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const filteredBooks = filteredCategory
        ? data.filter((book) => book.category.toLowerCase() === filteredCategory.toLowerCase())
        : data;

    // Obtén una lista única de categorías
    const categories = Array.from(new Set(data.map((book) => book.category)));
    return (
        <div className="Shop">
            <h1>Shop</h1>
            <FilterButtons categories={categories} setFilteredCategory={setFilteredCategory} />
            <div className="product-card-container">
                {filteredBooks.map((book) => {
                    
                    return <ProductCard key={book.id} book={book} addToCart={addToCart} />;
                })}
            </div>

            <button className="floating-btn" onClick={openModal}>
            <i className="fa-solid fa-cart-shopping"></i> {cartLength()}
            </button>
            {isModalOpen && (
                <CartModal
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                    onClose={closeModal}
                    updateQuantity={updateQuantity}
                    removeFromCart={removeFromCart} />
            )}
        </div>
    );
};

export default Shop;