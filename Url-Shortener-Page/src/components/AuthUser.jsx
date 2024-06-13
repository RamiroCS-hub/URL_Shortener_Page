import { useEffect } from 'react'
import { URL_VERIFICATION_API } from '../constants/constants.js'

export const AuthUser = ({ authCode }) => {
  useEffect(() => {
    console.log('The code was set to:', authCode)
    if (!authCode) {
      console.log('The code was not set')
      return () => console.log('Cleaning UseEffect')
    }
    console.log('Executing fetch:', authCode)
    fetch(`${URL_VERIFICATION_API}?code=${authCode}`, {
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
