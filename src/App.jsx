import './App.scss'
import Header from './components/Header/Header'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <div className='overflow'>
      <div className='bg-dark'>
        <Header />
      </div>

      <Projects />
    </div>
  )
}

export default App
