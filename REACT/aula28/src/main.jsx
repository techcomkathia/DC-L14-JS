import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UsuariosProvider} from './contextos/UsuariosContexto.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsuariosProvider>
      <App />
    </UsuariosProvider>
  </StrictMode>,
)
