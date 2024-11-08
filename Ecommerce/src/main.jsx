import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShopConetextProvider from './context/ShopContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopConetextProvider>
    <App />
    </ShopConetextProvider>
  </StrictMode>,
)
