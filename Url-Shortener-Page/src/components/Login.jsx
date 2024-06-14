import { useAuth0 } from '@auth0/auth0-react'

export function Login ({ handleLogout, isLogged }) {
  const { loginWithRedirect } = useAuth0()
  return (
    <>
      {
      isLogged
        ? <div className='logout-box'>
          <div className='logout'>
            <button onClick={() => handleLogout()}>Logout</button>
          </div>
        </div>
        : <div className='pop'>
          <h2>Want more features?</h2>
          <span>Nulla irure nostrud minim velit ullamco velit cupidatat pariatur reprehenderit labore.Ullamco consectetur eu et elit.</span>
          <div className='pop-login'>
            <button onClick={() => loginWithRedirect()}>Sing up</button>
            <button>Login</button>
          </div>
        </div>
    }
    </>
  )
}
