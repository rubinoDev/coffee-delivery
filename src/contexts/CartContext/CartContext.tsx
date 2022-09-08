import { createContext, ReactNode, useContext, useState } from "react";
import { Coffee, ProductsContext } from "../ProductsContext/ProductsContext";

interface CartContextProps{
  cart: Coffee[];
  handleAddCoffeeToCart: (id: number) => void;
}

interface CartContextProviderProps{
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({children}: CartContextProviderProps){
  const { products } = useContext(ProductsContext)
  const [cart, setCart] = useState<Coffee[]>([])


  function handleAddCoffeeToCart(id: number){
    const updatedCart = [...cart];
    const isCartEmpty = updatedCart.length === 0;
    const productFiltered = products.filter( product => product.id === id);
    const productIsAlreadyInCart = updatedCart.find(product => product.id === productFiltered[0].id);

    isCartEmpty ? setCart(productFiltered) 
    : productIsAlreadyInCart ? setCart(prevState => 
        prevState.map(item =>{
          const quantityUpdated = item.quantity + productFiltered[0].quantity;
          return {...item, quantity: quantityUpdated}
    }))
    : setCart(prevState => [...prevState, productFiltered[0]])    
  }


  return(
    <CartContext.Provider value={{
      cart,
      handleAddCoffeeToCart
      }}>
        { children }
      </CartContext.Provider>
  )
}