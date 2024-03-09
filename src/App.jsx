import './App.scss'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Theme from './components/Theme/Theme'

function App() {
  return (
    <div className='overflow'>
      <Header />

      <Navbar />

      <Projects />

      <Theme />
    </div>
  )
}

export default App
