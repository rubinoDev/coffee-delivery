import { createContext, ReactNode, useContext, useEffect, useReducer } from "react";

import { toast } from "react-toastify";

import { Coffee, ProductsContext } from "../ProductsContext/ProductsContext";

interface CartContextProps{
  cart: Coffee[];
  handleAddProductToCart: (id: number) => void;
  handleAddProductQuantityInCart: (id: number) => void;
  handleRemoveProductQuantityInCart: (id: number) => void;
  handleRemoveProductFromCart: (id: number) => void;
}

interface CartContextProviderProps{
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({children}: CartContextProviderProps){
  const { products, resetProductQuantity } = useContext(ProductsContext)

  const initCartState = () => {
    const storagedCart = localStorage.getItem('@CoffeeDelivery:cart')
      if (storagedCart) {
        return JSON.parse(storagedCart);
      }}

  const [cart, dispatch] = useReducer((state: Coffee[] ,action: any) =>{

    switch(action.type){
      case 'ADD_PRODUCT_TO_CART' :
        return action.payload.productIsAlreadyInCart ? 
        state.map(item =>{
          const quantityUpdated = item.quantity + action.payload.productsFiltered[0].quantity;
          return item.id === action.payload.productsFiltered[0].id ?
          {...item, quantity: quantityUpdated}
          : item 
        }) : [...state, action.payload.productsFiltered[0]]

        case 'ADD_PRODUCT_QUANTITY_IN_CART' :
          return state.map(item =>{
            const currentQuantity = item.quantity
            return item.id === action.payload.id ?
            {...item, quantity: currentQuantity + 1} 
            : item
          }) 

        case 'REMOVE_PRODUCT_QUANTITY_IN_CART':
          return state.map(item =>{
            const currentQuantity = item.quantity
            return item.id === action.payload.id  && item.quantity > 1?
            {...item, quantity: currentQuantity - 1} 
            : item
          })
        
        case 'REMOVE_PRODUCT_FROM_CART' :
        return action.payload.productsFiltered
        
        default: return state;
    }
  }, [], initCartState)

    console.log(cart)

  function handleAddProductToCart(id: number){
    const updatedCart = [...cart];
    const productsFiltered = products.filter( product => product.id === id);
    const productIsAlreadyInCart = updatedCart.find(product => product.id === productsFiltered[0].id);

    dispatch({
      type: 'ADD_PRODUCT_TO_CART',
      payload: {
        productIsAlreadyInCart,
        productsFiltered,
      }
    })
    
    resetProductQuantity(id)

    toast.success('Item adicionado ao carrinho com sucesso!')
  }

  function handleAddProductQuantityInCart(id: number){
    dispatch({
      type: 'ADD_PRODUCT_QUANTITY_IN_CART',
      payload: {
        id
      }
    })
  }

  function handleRemoveProductQuantityInCart(id: number){
    dispatch({
      type: 'REMOVE_PRODUCT_QUANTITY_IN_CART',
      payload: {
        id
      }
    })
  }

  function handleRemoveProductFromCart(id: number){
    const productsFiltered = cart.filter(item => item.id !== id);

    dispatch({
      type: 'REMOVE_PRODUCT_FROM_CART',
      payload: {
        productsFiltered
      }
    })
  }

  useEffect(() =>{
    localStorage.setItem('@CoffeeDelivery:cart', JSON.stringify(cart))
  },[cart])

  return(
    <CartContext.Provider value={{
      cart,
      handleAddProductToCart,
      handleAddProductQuantityInCart,
      handleRemoveProductQuantityInCart,
      handleRemoveProductFromCart
      }}>
        { children }
      </CartContext.Provider>
  )
}