import queryString from 'query-string'
import { useEffect } from 'react'
import { URL_VERIFICATION_API } from '../constants/constants.js'
export const AuthUser = ({ location }) => {
  const { code } = queryString.parse(location.search)
  useEffect(() => {
    console.log('The code was set to:', code)
    if (!code) {
      console.log('The code was not set')
      return () => console.log('Cleaning UseEffect')
    }
    console.log('Executing fetch:', code)
    fetch(`${URL_VERIFICATION_API}?code=${code.code}&state=${code.state}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json'
      }
    }).then(response => response.json())
      .then(data => console.log(data))
  }, [code])
  return (
    <div>.</div>
  )
}
