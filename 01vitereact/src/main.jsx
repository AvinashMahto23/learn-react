import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Jeetu from './Jeetu.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
     <Jeetu />
  </StrictMode>,
)
