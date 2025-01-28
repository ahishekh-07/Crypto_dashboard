import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {chakraprovider} from '@chakra-ui/react';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <chakraprovider>
    <App />
    </chakraprovider>
  </StrictMode>,
)
