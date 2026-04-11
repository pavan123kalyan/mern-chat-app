import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { SocketContextProvider } from './context/SocketContext.jsx'

import { ThemeProvider } from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
    <AuthContextProvider>
      <SocketContextProvider>

         <ThemeProvider>

    <App />

    </ThemeProvider>
    
    </SocketContextProvider>
    </AuthContextProvider>
    </BrowserRouter>
    
  </StrictMode> 
)
