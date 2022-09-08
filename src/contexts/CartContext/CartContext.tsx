import { createContext, ReactNode, useState } from "react";



interface CartContextProviderProps{
  children: ReactNode;
}

export const CartContext = createContext({})

export function CartContextProvider({children}: CartContextProviderProps){
  const [cart, setCart] = useState([])

  return(
    <CartContext.Provider value={{
      cart
      }}>
        { children }
      </CartContext.Provider>
  )
}