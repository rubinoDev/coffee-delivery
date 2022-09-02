import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { DefaultTheme } from './styles/themes/default'

export function App() {

  return (
    <ThemeProvider theme={DefaultTheme}>
      <h1>Hello world</h1>
      <GlobalStyle/>
    </ThemeProvider>
  )
}


