import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ResetStyle from './styles/ResetStyle.ts'
import GlobalStyle from './styles/GlobalStyle.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <App />
  </StrictMode>,
)
