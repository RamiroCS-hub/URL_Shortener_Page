import { useEffect, useState } from 'react'
import './App.css'
import { AuthUser } from './components/AuthUser.jsx'
import { Link } from './components/Link.jsx'
import { Login } from './components/Login.jsx'
import queryString from 'query-string'

function App () {
  const link = window.location.search
  const [authCode, setCode] = useState(null)
  useEffect(() => {
    const { code } = queryString.parse(window.location.search)
    setCode(code)
    console.log('code: ', code)
    console.log('link: ', link)
  }, [link])
  return (
    <body>
      <nav className='nav'><a href='#'>URL SHORTENER</a></nav>
      <div className='div'>
        <Link>Paste the Url to be shortened</Link>
        <Login />
      </div>
      {
        authCode && <AuthUser authCode={authCode} />
      }
    </body>
  )
}

export default App
