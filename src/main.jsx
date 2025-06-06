import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '../src/styles/index.css'
import "../src/styles/responsive.css"
import App from './App.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>

    <App />
     </BrowserRouter>
   
  </StrictMode>,
)
