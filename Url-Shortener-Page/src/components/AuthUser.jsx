import { useEffect } from 'react'
import { URL_VERIFICATION_API } from '../constants/constants.js'

export const AuthUser = ({ codeVerifier, authCode }) => {
  useEffect(() => {
    console.log('The code was set to:', authCode)
    if (!authCode) {
      console.log('The code was not set')
      return () => console.log('Cleaning UseEffect')
    }
    const codeVerifier = JSON.parse(sessionStorage.getItem('a0.spajs.txs.tKzMBeuIjTTkONKBafyL0adkgSl4MebY')).code_verifier

    console.log('Executing fetch:', sessionStorage.getItem('code_verifier'))
    fetch(`${URL_VERIFICATION_API}?code=${authCode}&verifier=${codeVerifier}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json'
      }
    }).then(response => response.json())
      .then(data => console.log(data))
  }, [authCode])
  return (
    <div>.</div>
  )
}
