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
          <span>Want to track your links? Want to have an easy way to acceed to all of your shortened links? Sign up and start enjoying the full capacities of <b>URL Shortener!</b></span>
          <div className='pop-login'>
            <button onClick={() => loginWithRedirect({screen_hint: 'signup'})}>Sing up</button>
            <button onClick={() => loginWithRedirect() }>Login</button>
          </div>
        </div>
    }
    </>
  )
}
