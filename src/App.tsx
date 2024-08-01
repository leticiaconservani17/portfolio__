import Projects from './containers/projects'
import Sidebar from './containers/sidebar'
import About from './containers/sobre'
import GlobalStyle, { Container } from './styles/global'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </>
  )
}

export default App
