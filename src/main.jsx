import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Linktree from './Linktree.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Linktree />
  </StrictMode>,
)
