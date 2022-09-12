import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CartContextProvider } from './contexts/CartContext/CartContext'
import { ProductsContextProvider } from './contexts/ProductsContext/ProductsContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { DefaultTheme } from './styles/themes/default'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FormContextProvider } from './contexts/FormContext/FormContext'
import { PaymentContext, PaymentContextProvider } from './contexts/PaymentContext/PaymentContext'

export function App() {
 
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <ProductsContextProvider>
        <CartContextProvider>
        <FormContextProvider>
        <PaymentContextProvider>
          <GlobalStyle/>
          <Router/>
          <ToastContainer autoClose={2000}/>
        </PaymentContextProvider>
        </FormContextProvider>
        </CartContextProvider>
        </ProductsContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}


