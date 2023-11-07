import React from "react";
import ProductCard from "./ProductCard";
import librosDestacados from "../data/products.js";
import '../styles/Popular.css'

function Popular(){
    return(
        <div className="Popular">
            <h2>Libros Populares</h2>
            <div className="product-card-container">
                {librosDestacados.map((book)=>(
                    <ProductCard key={book.id} {...book}/>
                ))}
            </div>
        </div>
    )
}

export default Popular;