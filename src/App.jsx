import './App.scss'
import About from './components/About/About'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Technologies from './components/Technologies/Technologies'

function App() {
  return (
    <>
      <div className='overflow'>
        <Header />

        <Navbar />

        <Projects />

        <About />

        <Technologies />
      </div>
    </>
  )
}

export default App
