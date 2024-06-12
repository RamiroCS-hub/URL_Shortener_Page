import { Auth0Provider } from '@auth0/auth0-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Auth0ProviderWithNavigate = ({ children }) => {
  const navigate = useNavigate()

  // const domain = process.env.REACT_APP_AUTH0_DOMAIN
  // const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
  // const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URL

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname)
  }

  // if (!(domain && clientId && redirectUri)) {
  //   return null
  // }
  return (
    <Auth0Provider
      domain='dev-fyc850ikobc57pdt.us.auth0.com'
      clientId='zQZ8PS2D4WjJSPMlMp4TMLwgnPlQkqGt'
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  )
}
