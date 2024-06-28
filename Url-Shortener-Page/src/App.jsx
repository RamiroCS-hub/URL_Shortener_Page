/* eslint-disable no-undef */
import { useEffect, useState } from 'react'
import './App.css'
import { AuthUser } from './components/AuthUser.jsx'
import { Link } from './components/Link.jsx'
import { Login } from './components/Login.jsx'
import queryString from 'query-string'
import { useAuth0 } from '@auth0/auth0-react'
import { responseObject } from './constants/constants.js'

function App () {
  const link = window.location.search
  const [authCode, setCode] = useState(null)
  const [auth, setAuth] = useState(false)
  // const [data, setData] = useState(responseObject)
  const [change, setChange] = useState(null)
  const { logout } = useAuth0()

  useEffect(() => {
    const { code } = queryString.parse(window.location.search)
    setCode(code)
  }, [link])

  useEffect(() => {
    if (!localStorage.getItem('token')) return
    console.log(import.meta.env.VITE_URL_API)
    setAuth(true)
  }, [])

  const isAuth = () => {
    setAuth(true)
  }

  const handleLogout = () => {
    logout()
    localStorage.removeItem('token')
    setAuth(false)
  }

  const handleChange = () => {
    setChange(!change)
  }
  return (
    <body>
      <nav className='nav'><a href='#'>URL SHORTENER</a></nav>
      <div className='div'>
        <Link isLogged={auth} handleResponse={handleChange}>Paste the Url to be shortened</Link>
        <AuthUser handleChange={handleChange} change={change} isAuth={isAuth} authCode={authCode} handleLogout={handleLogout} />
        <Login isLogged={auth} handleLogout={handleLogout} />
      </div>

    </body>
  )
}

export default App
