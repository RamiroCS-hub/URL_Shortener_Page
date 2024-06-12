import './App.css'
import { AuthUser } from './components/AuthUser.jsx'
import { Link } from './components/Link.jsx'
import { Login } from './components/Login.jsx'
import { Route } from 'react-router-dom'

function App () {
  return (
    <body>
      <nav className='nav'><a href='#'>URL SHORTENER</a></nav>
      <div className='div'>
        <Link>Paste the Url to be shortened</Link>
        <Login />
      </div>
      <Route path='/redirect' component='Challenges' />
      <AuthUser />
    </body>
  )
}

export default App
