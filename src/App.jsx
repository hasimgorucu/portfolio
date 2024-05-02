
import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Hero from './components/hero/Hero'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'

function App() {

  return (
    <div className='App'>
     <Hero/>
     <About/>
     <Skills/>
     <Experience/>
     <Projects/>
     <Contact/>
    </div>
  )
}

export default App
