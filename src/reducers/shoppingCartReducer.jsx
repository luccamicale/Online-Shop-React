import TYPES from "./actionsTypes";

export const productsInitialState = {
    products: [
      {
        "id": 1,
        "name": "product 1",
        "price": 50
      },
      {
        "id": 2,
        "name": "product 2",
        "price": 30
      },
      {
        "id": 3,
        "name": "product 3",
        "price": 40
      },
      {
        "id": 4,
        "name": "product 4",
        "price": 78
      },
      {
        "id": 5,
        "name": "product 5",
        "price": 90
      },
      {
        "id": 6,
        "name": "product 6",
        "price": 60
      }
    ],
    cart: [], //arranca vacio porque todavia no se agrego nada
    totalPriceShoppingCart: 0 
  }

export const reducerCart = (state, action) => {  //es una funcion que recibe el estado inicial y la accion
    switch(action.type) { // se selecciona el tipo de accion que se ha realizado
        case TYPES.ADD_TO_CART: { //ingresa al estado, a su propiedad products, usa el metodo find para buscar cual es el objeto llamado
            let newProduct = state.products.find((product) => product.id === action.payload) //vuando encuentra el producto, lo almacena el nuevo producto en una varibale
            return {
              ...state, //...state hace se mantenga el estado tal cual esta
              cart: [...state.cart, newProduct] //pero que solamente s emodifique en la propiedad carrito
            }; //[...state.cart, newProduct] mantiene lo que esta dentro del carrito y agrega el nuevo prodcto
        }
        case TYPES.DELETE_PRODUCT_FROM_CART: {
            return {
              ...state,
              cart: state.cart.filter((product) => product.id !== action.payload) ////filter recorre todos los productos del carrito y solamente se va a quedar con esos productos que sean diferentes de esos productos que queremos eliminar
            }
          }
      
        case TYPES.DELETE_ALL_FROM_CART: {
            return productsInitialState; //devuelve el estado actual, el cual era 0, por lo tanto el carrito vuelvo a esta vacio
          }

        case TYPES.CALCULATE_TOTAL_PRICE_OF_THE_CART: {
            return {
              ...state,
              totalPriceShoppingCart: state.cart.reduce((previousValue, product) => previousValue + product.price, 0)
            }
        }
        default:
            return state; //por si no reconoce algun estado, deveulve el estado actual
    }

    throw Error("Unknown action: " + action.type)
}