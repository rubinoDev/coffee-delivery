import { createContext, ReactNode, useEffect, useState } from "react";
import { CoffeesApi } from '../../coffeesApi'

export interface Coffee{
  id: number;
  title: string;
  description: string;
  quantity: number;
  label: string[];
  image: string;
  price: string;
}

interface ProductsContextType{
  products: Coffee[];
  handleAddProductQuantity: (id:number) => void;
  handleRemoveProductQuantity: (id:number) => void;
}

interface ProductsContextProviderProps{
  children: ReactNode;
}

export const ProductsContext = createContext({} as ProductsContextType)

export function ProductsContextProvider({children}: ProductsContextProviderProps){
  const [products, setProducts] = useState<Coffee[]>([]);

  useEffect(() => {
    setProducts(CoffeesApi.map(product => product))
  },[])

  function handleAddProductQuantity(id:number){
    setProducts(prevState =>
      prevState.map(product =>{
        const currentQuantity = product.quantity;
        return product.id === id ?
        {...product, quantity: currentQuantity + 1} 
        : product
      }) 
    )
  }

  function handleRemoveProductQuantity(id:number){
    setProducts(prevState =>
      prevState.map(product =>{
        const currentQuantity = product.quantity;
        return product.id === id && currentQuantity > 1?
        {...product, quantity: currentQuantity - 1} 
        : product
      }) 
    )
  }


  return(
    <ProductsContext.Provider value={{
      products,
      handleAddProductQuantity,
      handleRemoveProductQuantity
      }}>
        { children }
      </ProductsContext.Provider>
  )
}