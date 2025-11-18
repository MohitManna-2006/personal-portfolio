import './App.css'
import Nav from './components/Nav/Nav'
import Portfolio from './components/Portfolio'

/**
 * Single-page portfolio application.
 * All sections (Home, Experience, Skills) are stacked vertically on one page.
 * Navigation uses scroll-to-section instead of routing.
 */
function App() {
  return(
    <>
      <Nav/>
      <Portfolio />
    </>
  )
}

export default App

