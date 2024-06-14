/* eslint-disable no-undef */
import { useEffect, useState } from 'react'
import { URL_VERIFICATION_API, responseObject } from '../constants/constants.js'

export const AuthUser = ({ isAuth, authCode, newLink }) => {
  const [userLinks, setUserLinks] = useState([null])
  const [statusCode, setDataStatus] = useState(null)
  useEffect(() => {
    if (!authCode) {
      console.log('The code was not set')
      return () => console.log('Cleaning UseEffect')
    }
    const codeVerifier = JSON.parse(sessionStorage.getItem('a0.spajs.txs.tKzMBeuIjTTkONKBafyL0adkgSl4MebY')).code_verifier

    fetch(`${URL_VERIFICATION_API}?code=${authCode}&verifier=${codeVerifier}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json'
      }
    }).then(response => {
      response.status !== 200 && response.status !== 206 ? setDataStatus(null) : setDataStatus(response.status)
      return response.json()
    }).then(data => {
      console.log(data)
      localStorage.setItem('token', JSON.stringify(data.token))
      isAuth()
    })
    // TODO: Animación de carga
  }, [authCode])

  useEffect(() => {
    console.log(statusCode)
    if (statusCode === 203) return
    if (statusCode !== 200) return
    console.log('')
  }, [userLinks])

  useEffect(() => {
    const newUserLinks = [...userLinks]
    newUserLinks.push(newLink)
    setUserLinks(newUserLinks)
  }, [newLink])
  return (
    <>
      {
        statusCode &&
          <div>{
            statusCode === 206
              ? 'Try shorten your first link!'
              : <ul> {
                userLinks.map((_, index) => {
                  return <li key={index}>{_.id}</li>
                })
              }
              </ul>
          }
          </div>
    }
    </>
  )
}
