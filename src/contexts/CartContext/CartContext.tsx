import { createContext, ReactNode, useContext, useState } from "react";
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
  const { products } = useContext(ProductsContext)
  const [cart, setCart] = useState<Coffee[]>([])


  function handleAddProductToCart(id: number){
    const updatedCart = [...cart];
    const productsFiltered = products.filter( product => product.id === id);
    const productIsAlreadyInCart = updatedCart.find(product => product.id === productsFiltered[0].id);

    productIsAlreadyInCart ? setCart(prevState => 
      prevState.map(item =>{
        const quantityUpdated = item.quantity + productsFiltered[0].quantity;
        return item.id === productsFiltered[0].id ?
        {...item, quantity: quantityUpdated}
        : item 
    }))
    : setCart(prevState => [...prevState, productsFiltered[0]])    
  }

  function handleAddProductQuantityInCart(id: number){
    setCart(prevState =>
      prevState.map(item =>{
        const currentQuantity = item.quantity
        return item.id === id ?
        {...item, quantity: currentQuantity + 1} 
        : item
      })  
    )
  }

  function handleRemoveProductQuantityInCart(id: number){
    setCart(prevState =>
      prevState.map(item =>{
        const currentQuantity = item.quantity
        return item.id === id && item.quantity > 1 ?
        {...item, quantity: currentQuantity - 1} 
        : item
      })  
    )
  }

  function handleRemoveProductFromCart(id: number){
    const productsFiltered = cart.filter(item => item.id !== id);
    setCart(productsFiltered)
  }

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