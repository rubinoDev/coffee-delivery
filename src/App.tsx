import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ProductsContextProvider } from './contexts/ProductsContext/ProductsContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { DefaultTheme } from './styles/themes/default'

export function App() {
 
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <ProductsContextProvider>
          <Router/>
        </ProductsContextProvider>
      </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  )
}


