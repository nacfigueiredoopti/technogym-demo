import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { OptimizelyProvider, createInstance } from '@optimizely/react-sdk'
import './index.css'
import App from './App.jsx'
import { optimizelyConfig, optimizelyClientOptions } from './optimizely/config'

// Create Optimizely instance
const optimizely = createInstance({
  sdkKey: optimizelyConfig.sdkKey,
  ...optimizelyClientOptions,
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OptimizelyProvider
      optimizely={optimizely}
      user={{ id: 'user_' + Math.random().toString(36).substring(7) }}
    >
      <App />
    </OptimizelyProvider>
  </StrictMode>,
)
