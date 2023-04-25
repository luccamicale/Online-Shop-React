import React from "react";

const ShoppingCartProduct = ({data, deleteFromCart}) => {
    return (
        <div>
            <h2>{data.name}</h2>
            <p>Price: {data.price}</p>
            <button onClick={() => deleteFromCart(data.id)}>Delete From Cart</button>
        </div>
    )
}

export default ShoppingCartProduct;