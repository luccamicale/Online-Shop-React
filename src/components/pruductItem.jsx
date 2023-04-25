import React from "react";

const ProductItem = ({data, addToCart}) => { //recibe la data de los productos y la accion agregar producto
    return (
        <div>
            <h2>{data.name}</h2>
            <p>Price: {data.price}</p>
            <button onClick={() => addToCart(data.id)}>Add to Cart</button>
        </div> //onclick capta la funcion agregar al carrito
    )
}

export default ProductItem;