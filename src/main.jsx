import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { palette } from './palett/pallete.js'
import { BrowserRouter } from 'react-router'

Object.entries(palette).forEach(([key, value]) => {
  document.documentElement.style.setProperty(`--${key}`, value);
});
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
