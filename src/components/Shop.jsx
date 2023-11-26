import React, {useState} from "react";
import ProductCard from "./ProductCard";
import data from "../data/allBoks";
import FilterButtons from './FliterButtons';
import '../styles/Shop.css'


const Shop = () => {
    const [filteredCategory, setFilteredCategory] = useState(null);

    // Filtra libros por categoría si se selecciona una categoría
    const filteredBooks = filteredCategory
        ? data.filter((book) => book.category === filteredCategory)
        : data;

    // Obtén una lista única de categorías
    const categories = Array.from(new Set(data.map((book) => book.category)));

    return (
        <div className="Shop">
            <h1>Shop</h1>
            <FilterButtons categories={categories} setFilteredCategory={setFilteredCategory} />
            <div className="product-card-container">
                {filteredBooks.map((book) => (
                    <ProductCard key={book.id} {...book} />
                ))}
            </div>
        </div>
    );
};

export default Shop;