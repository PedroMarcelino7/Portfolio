import './App.scss'
import About from './components/About/About'
import Certifications from './components/Certifications/Certifications'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import Projects from './components/Projects/Projects'
import Technologies from './components/Technologies/Technologies'

function App() {
  return (
    <>
      <div className='overflow'>
        <Header />

        <About />

        <Certifications />

        <Projects />

        <div className='container d-flex flex-column'>
          <span>Skills (technologies)</span>
        </div>

        <Contact />
        
        {/* <Technologies /> */}
      </div>
    </>
  )
}

export default App
