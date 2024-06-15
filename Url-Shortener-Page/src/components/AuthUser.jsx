/* eslint-disable no-undef */
import { EditPop } from './EditPop.jsx'
import { useEffect, useState } from 'react'
import { URL_VERIFICATION_API, responseObject, URL_API } from '../constants/constants.js'
import toast, { Toaster } from 'react-hot-toast'
import { UserLink } from './UserLink.jsx'

export const AuthUser = ({ handleChange, isAuth, authCode, change, handleLogout }) => {
  const [userLinks, setUserLinks] = useState([responseObject])
  const [statusCode, setDataStatus] = useState(null)
  const [editData, setEditData] = useState(null)
  useEffect(() => {
    if (!authCode && !localStorage.getItem('token')) {
      console.log('The code and the token were not set')
      return () => console.log('Cleaning UseEffect')
    }

    const URL = authCode
      ? `${URL_VERIFICATION_API}?code=${authCode}&verifier=${JSON.parse(sessionStorage.getItem('a0.spajs.txs.tKzMBeuIjTTkONKBafyL0adkgSl4MebY')).code_verifier}`
      : `${URL_API}/auth/`
    const token = JSON.parse(localStorage.getItem('token'))
    console.log(token)
    fetch(URL, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      response.status !== 200 && response.status !== 206 && response.status !== 401 ? setDataStatus(null) : setDataStatus(response.status)
      console.log(response.status, statusCode)
      return response.json()
    }).then(data => {
      console.log(data)
      authCode ? isAuth() : console.log('The user is authenticated')
      data.token ? localStorage.setItem('token', JSON.stringify(data.token)) : console.log('The user already has the token')
      setUserLinks(data)
      console.log('User links:', data)
    })
    // TODO: Animación de carga
  }, [authCode, change])

  useEffect(() => {
    if (statusCode === 401) {
      handleLogout()
      toast('You have to log in again')
      return
    }
    if (!statusCode || statusCode === 206) return
    console.log('')
  }, [statusCode])

  // useEffect(() => {
  //   if (!newLink) return
  //   const newUserLinks = [...userLinks]
  //   newUserLinks.push(newLink)
  //   console.log(newUserLinks)
  //   setUserLinks(newUserLinks)
  // }, [newLink])
  const handleDelete = (id) => {
    const token = JSON.parse(localStorage.getItem('token'))
    fetch(`${URL_API}/auth/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => handleChange())
  }
  const handleEdit = (id, shortenUrl, originalUrl) => {
    // const token = JSON.parse(localStorage.getItem('token'))
    const data = {
      id,
      shortenUrl,
      originalUrl
    }
    setEditData(data)
    // fetch(`${URL_API}/auth/${id}`, {
    //   method: 'PATCH',
    //   headers: {
    //     'content-type': 'application/json',
    //     Accept: 'application/json',
    //     Authorization: `Bearer ${token}`
    //   }
    // })
    //   .then(response => response.json())
    //   .then(data => handleChange())
  }
  const handleEditData = () => {
    setEditData(null)
  }
  return (
    <>
      {
        statusCode &&
          <div>{
            statusCode === 206
              ? 'Try shorten your first link!'
              : userLinks && <div className='user-link'>{
                userLinks.map((_, index) => {
                  return <UserLink handleEdit={handleEdit} shortId={_.shortId} handleDelete={handleDelete} key={index} originalUrl={_.originalUrl} shortenUrl={_.shortenUrl} clicks={_.clicks} />
                })
              }
              </div>
          }
          </div>
    }
      {
      editData && <EditPop handleEdit={handleEditData} data={editData} />
    }
      <Toaster toastOptions={{
        style: {
          backgroundColor: 'red',
          color: '#FFFF'
        }
      }}
      />
    </>
  )
}
