import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './router/Route'
import InteractionProvider from './context/ContextApi'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InteractionProvider>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </InteractionProvider>
  </StrictMode>,
)
