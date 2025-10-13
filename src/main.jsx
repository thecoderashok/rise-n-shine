import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'lenis/dist/lenis.css'
import App from './App.jsx'
import './index.css'
import LenisProvider from './context/Lenis/LenisProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LenisProvider>
      <App />
    </LenisProvider>
  </StrictMode>,
)
