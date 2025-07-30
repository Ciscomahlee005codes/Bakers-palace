import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './Context/StoreContext.jsx'
import { AuthProvider } from './Context/AuthContext.jsx' 

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </AuthProvider>
  </BrowserRouter>
)