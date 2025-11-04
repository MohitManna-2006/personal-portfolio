import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Home from './components/home/Home'
import About from './components/about/About'
import  Experience  from './components/experience/Experience'
import  Skills  from './components/skills/Skills'

function App() {
  return(
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/about" element={<About />} />;
        <Route path = "/experience" element={<Experience/>}/>;
        <Route path = "/skills" element = {<Skills/>}/>;
      </Routes>
    </Router>
  )
}

export default App

