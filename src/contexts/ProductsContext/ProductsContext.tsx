import { createContext, ReactNode, useReducer} from "react";

import { CoffeesApi } from '../../coffeesApi'

export interface Coffee{
  id: number;
  title: string;
  description: string;
  quantity: number;
  label: string[];
  image: string;
  price: number;
}

interface ProductsContextType{
  products: Coffee[];
  handleAddProductQuantity: (id:number) => void;
  handleRemoveProductQuantity: (id:number) => void;
  resetProductQuantity: (id:number) => void;
}

interface ProductsContextProviderProps{
  children: ReactNode;
}

export const ProductsContext = createContext({} as ProductsContextType)

export function ProductsContextProvider({children}: ProductsContextProviderProps){
  const allCoffees = CoffeesApi ;

  const [products, dispatch] = useReducer((state: Coffee[], action: any) => {

    switch(action.type){
      case 'ADD_PRODUCT_QUANTITY' :
        return state.map(product =>{
          const currentQuantity = product.quantity;
          return product.id === action.payload.id ?
          {...product, quantity: currentQuantity + 1} 
          : product
        }) 

      case 'REMOVE_PRODUCT_QUANTITY' :
        return state.map(product =>{
          const currentQuantity = product.quantity;
          return product.id === action.payload.id && currentQuantity > 1?
          {...product, quantity: currentQuantity - 1} 
          : product
        }) 

      case 'RESET_PRODUCT_QUANTITY' :
        return state.map(product =>{
          return product.id === action.payload.id ? 
          {...product, quantity: 1} 
          : product
        })

      default : return state;
      
    }
  }, allCoffees);

  function handleAddProductQuantity(id:number){
    dispatch({
      type: 'ADD_PRODUCT_QUANTITY',
      payload: {
        id
      }
    })
  }

  function handleRemoveProductQuantity(id:number){
    dispatch({
      type: 'REMOVE_PRODUCT_QUANTITY',
      payload: {
        id
      }
    })
  }

  function resetProductQuantity(id : number){
    dispatch({
      type: 'RESET_PRODUCT_QUANTITY',
      payload: {
        id
      }
    })
  }

  return(
    <ProductsContext.Provider value={{
      products,
      handleAddProductQuantity,
      handleRemoveProductQuantity,
      resetProductQuantity
      }}>
        { children }
      </ProductsContext.Provider>
  )
}