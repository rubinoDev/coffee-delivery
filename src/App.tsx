import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CartContextProvider } from './contexts/CartContext/CartContext'
import { ProductsContextProvider } from './contexts/ProductsContext/ProductsContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { DefaultTheme } from './styles/themes/default'

export function App() {
 
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <ProductsContextProvider>
          <CartContextProvider>
            <Router/>
          </CartContextProvider>
        </ProductsContextProvider>
      </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  )
}


