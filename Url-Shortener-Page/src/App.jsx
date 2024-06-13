import { useEffect, useState } from 'react'
import './App.css'
import { AuthUser } from './components/AuthUser.jsx'
import { Link } from './components/Link.jsx'
import { Login } from './components/Login.jsx'
import queryString from 'query-string'
import { generateChallengeAndVerifier } from './logic/codeVerifier.js'
import { useAuth0 } from '@auth0/auth0-react'
function App () {
  const link = window.location.search
  const [authCode, setCode] = useState(null)
  const [codeVerifier, setVerifier] = useState(null)
  const { loginWithRedirect } = useAuth0()

  useEffect(() => {
    const { code } = queryString.parse(window.location.search)
    setCode(code)
    console.log('code: ', code)
    console.log('link: ', link)
  }, [link])

  const handleCode = async () => {
    const { code_verifier, code_challenge } = await generateChallengeAndVerifier()
    loginWithRedirect()
    console.log(JSON.parse(sessionStorage.getItem('a0.spajs.txs.tKzMBeuIjTTkONKBafyL0adkgSl4MebY')).code_verifier)
    console.log(code_verifier, code_challenge)
  }
  return (
    <body>
      <nav className='nav'><a href='#'>URL SHORTENER</a></nav>
      <div className='div'>
        <Link>Paste the Url to be shortened</Link>
        <Login handleCode={handleCode} />
      </div>
      {
        authCode && <AuthUser authCode={authCode} />
      }
    </body>
  )
}

export default App
