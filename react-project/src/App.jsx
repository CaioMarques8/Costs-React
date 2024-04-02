import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './componets/pages/Home'
import Contact from './componets/pages/Contact'
import Company from './componets/pages/Company'
import NewProject from './componets/pages/NewProject'
import Projects from './componets/pages/Projects'

import Container from './componets/layout/Container'

import Navbar from './componets/layout/Navbar'
import Footer from './componets/layout/Footer'
import Project from './componets/pages/Project'



function App() {
  
  return (
    <Router>
      <Navbar/> 
      <Container  customClass="min-height">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/company" element={<Company />} />
            <Route path="/newproject" element={<NewProject />}/> 
            <Route path="/project/:id" element={<Project />}/>   
          </Routes>
        </Container>
      <Footer/>
    </Router>
  )
}

export default App
