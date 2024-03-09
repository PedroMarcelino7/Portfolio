import './App.scss'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <div className='overflow'>
      <Header />

      <Navbar />

      <Projects />
    </div>
  )
}

export default App
