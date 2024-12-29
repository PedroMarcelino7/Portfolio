import './App.scss'
import { useTheme } from './contexts/ThemeContext'

import About from './components/About/About'
import Certifications from './components/Certifications/Certifications'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import Projects from './components/Projects/Projects'

function App() {
  const { theme } = useTheme()

  return (
    <div className={`overflow ${theme}`}>
      <Header />

      <About />

      <Projects />

      {/* <Certifications /> */}

      <Contact />
    </div>
  )
}

export default App
