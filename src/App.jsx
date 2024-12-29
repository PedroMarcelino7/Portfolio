import './App.scss'

import About from './components/About/About'
import Certifications from './components/Certifications/Certifications'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <div className='overflow'>
      <Header />

      <About />

      <Projects />

      {/* <Certifications /> */}

      <Contact />
    </div>
  )
}

export default App
