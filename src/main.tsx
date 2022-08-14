import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import ThemeContextContainer from './ui/container/ThemeContextContainer'
import './index.css'

const root = document.getElementById('root')

createRoot(root!).render(
  <StrictMode>
    <ThemeContextContainer>
      <App />
    </ThemeContextContainer>
  </StrictMode>,
)
