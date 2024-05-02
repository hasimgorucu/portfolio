
import './App.css'
import About from './components/about/About'
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
    </div>
  )
}

export default App
