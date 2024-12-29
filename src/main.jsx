import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { ThemeProvider } from './contexts/ThemeContext.jsx'

import { register } from 'swiper/element/bundle'
register()

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
)
