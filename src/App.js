import './App.css';
import { useReducer } from 'react';
import ProductItem from './components/pruductItem';
import ShoppingCartProduct from './components/shoppingCartproduct';
import { reducerCart, productsInitialState } from './reducers/shoppingCartReducer';
import TYPES from './reducers/actionsTypes';

function App() {

  const [state, dispatch] = useReducer(reducerCart, productsInitialState); //el metodo dispatch envia la informacion a la funcion reductora

  const addToCart = (id) => {
    dispatch({
      type: TYPES.ADD_TO_CART, //el tipo de funcion que quiero utilizar
      payload: id //la info necesaria que necesito para realizar esta actualizacion del estado (id del product para indentificarlo)
    })
  }

  
  const deleteFromCart = (id) => {
    dispatch({
      type: TYPES.DELETE_PRODUCT_FROM_CART,
      payload: id
    })
  }

  const clearCart = () => {
    dispatch({
      type: TYPES.DELETE_ALL_FROM_CART
    })
  }

  const calculateTotalPriceOfCart = () => {
    dispatch({ type: TYPES.CALCULATE_TOTAL_PRICE_OF_THE_CART })
  }

  return (
    <div className="App">
      <h1 className='title-products'>E-Commerce</h1>
      <hr />
      <h2 className='subtitle-products'>Products in stock</h2>
      <div className='container_grid_products'>
        {
          state.products.map((product) => { // se usa el map para recorrer el array de productos, lo obtiene mediante el id y lo agrega con la funcion addtocart
            return <ProductItem key={product.id} data={product} addToCart={addToCart} />
          })
        }
      </div>
      <hr />
      <h2 className='subtitle-shopping-cart'>Shopping Cart</h2>
      <div>
        <button className='btn btn-total-price' onClick={() => calculateTotalPriceOfCart()}>Total price</button>
        {state.totalPriceShoppingCart > 0 && <p className='totalPrice_shoppingCart'>Total Price: {state.totalPriceShoppingCart}</p>}
        <button className='btn btn-clear' onClick={() => clearCart()}>Clear cart</button>
      </div>

      {
        state.cart.length === 0 && <p>There are not products in the cart</p> //cuando no haya productos en el carrito
      }

      <div className='container_grid_shopping_cart'>
      {
        state.cart.map((productCart) => { //recorre otra vez los productos, busca el id y luego cumple con la funcion de eliminar
        return <ShoppingCartProduct key={productCart.id + (Math.random() * 50)} data={productCart} deleteFromCart={deleteFromCart} />
        }) //se usa el math.random para permitir que se puedan agregar varias unidades del mismo prodcuto sin problema
      }
      </div>
    </div>
  );
}

export default App;
