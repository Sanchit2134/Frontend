import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import ShopContextProvider from './context/ShopContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router> {/* Ensure Router wraps everything */}
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </Router>
  </StrictMode>
);
