import React from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

const root = createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <Auth0Provider
      domain='dev-fyc850ikobc57pdt.us.auth0.com'
      clientId='zQZ8PS2D4WjJSPMlMp4TMLwgnPlQkqGt'
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
      skipRedirectCallback
      responseType='code'
    >

      <App />
    </Auth0Provider>
  </BrowserRouter>
)
