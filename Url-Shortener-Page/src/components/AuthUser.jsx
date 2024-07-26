/* eslint-disable no-undef */
import { EditPop } from './EditPop.jsx'
import { useEffect, useState } from 'react'
import { responseObject } from '../constants/constants.js'
import toast, { Toaster } from 'react-hot-toast'
import { UserLink } from './UserLink.jsx'

export const AuthUser = ({ handleChange, isAuth, authCode, change, handleLogout }) => {
  const [userLinks, setUserLinks] = useState(null)
  const [statusCode, setDataStatus] = useState(null)
  const [editData, setEditData] = useState(null)
  const [isUserLinks, setIsUserLinks] = useState(null)
  useEffect(() => {
    if (!authCode && !localStorage.getItem('token')) {
      return () => console.log('Cleaning UseEffect')
    }

    const URL = authCode
      ? `${import.meta.env.VITE_URL_VERIFICATION_API}/auth?code=${authCode}&verifier=${JSON.parse(sessionStorage.getItem('a0.spajs.txs.tKzMBeuIjTTkONKBafyL0adkgSl4MebY')).code_verifier}`
      : `${import.meta.env.VITE_URL_API}/auth/`
    const token = JSON.parse(localStorage.getItem('token'))
    fetch(URL, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      response.status !== 200 && response.status !== 206 && response.status !== 401 ? setDataStatus(null) : setDataStatus(response.status)
      return response.json()
    }).then(data => {
      authCode ? isAuth() : ''
      data.token ? localStorage.setItem('token', JSON.stringify(data.token)) : '' 
      console.log(data.data)
      data.data ? setUserLinks(data.data) : ''
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
    fetch(`${import.meta.env.VITE_URL_API}/auth/${id}`, {
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
  }
  const handleEditData = (newData, id) => {
    const token = JSON.parse(localStorage.getItem('token'))
    const object  = {
      originalUrl: newData
    }
    fetch(`${import.meta.env.VITE_URL_API}/auth/${id}`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(object)
      })
        .then(response => response.json())
        .then(data => {
          setEditData(null)
          handleChange()
        })
  }

  useEffect(() => {
    setIsUserLinks(true)
    console.log(userLinks)
  }, [userLinks])
  return (
    <>
      {
        userLinks &&
          <div>{
            statusCode === 206
              ? 'Try shorten your first link!'
              : <div className='user-link'>{
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
