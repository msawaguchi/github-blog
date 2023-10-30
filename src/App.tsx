import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { GithubInfoProvider } from './contexts/GithubInfoContexts'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <GithubInfoProvider>
          <Router />
        </GithubInfoProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
