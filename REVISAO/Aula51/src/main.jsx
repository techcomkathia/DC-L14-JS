import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContextoExemploProvider } from './contexto/contextoExemploProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextoExemploProvider>
      <App />
    </ContextoExemploProvider>
  </StrictMode>,
)
