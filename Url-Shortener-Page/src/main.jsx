import React from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App.jsx'
import './index.css'
import { challenge } from './logic/codeVerifier.js'

const root = createRoot(document.getElementById('root'))

root.render(

  <Auth0Provider
    domain='dev-fyc850ikobc57pdt.us.auth0.com'
    clientId='tKzMBeuIjTTkONKBafyL0adkgSl4MebY'
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    skipRedirectCallback
    responseType='code'
    codeChallenge={challenge}
    codeChallengeMethod='S256'
    state={false}
    audience='htpps://RS-256-api'
  >

    <App />
  </Auth0Provider>
)
