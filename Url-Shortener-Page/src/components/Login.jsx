import { useAuth0 } from '@auth0/auth0-react'

export function Login ({ authCode }) {
  const { loginWithRedirect } = useAuth0()

  return (
    <div className='pop'>
      <h2>Want more features?</h2>
      <span>Nulla irure nostrud minim velit ullamco velit cupidatat pariatur reprehenderit labore.Ullamco consectetur eu et elit.</span>
      <div className='pop-login'>
        <button onClick={() => loginWithRedirect()}>Sing up</button>
        <button>Login</button>
      </div>
    </div>
  )
}
