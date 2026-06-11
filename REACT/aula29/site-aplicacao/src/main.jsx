import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {UsuariosContextoProvider} from './contexto/UsuariosContexto.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsuariosContextoProvider>
      <App />
    </UsuariosContextoProvider>
  </StrictMode>,
)
