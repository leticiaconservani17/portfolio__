import { ThemeProvider } from 'styled-components'
import Projects from './containers/projects'
import Sidebar from './containers/sidebar'
import About from './containers/sobre'
import GlobalStyle, { Container } from './styles/global'
import lightTheme from './themes/light'
import darkTheme from './themes/dark'
import { useState } from 'react'

function App() {
  const [setDarkTheme, setLightTheme] = useState(false)

  function themeChange() {
    setLightTheme(!setDarkTheme)
  }

  return (
    <>
      <ThemeProvider theme={setDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Container>
          <Sidebar themeChange={themeChange} />
          <main>
            <About />
            <Projects />
          </main>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
