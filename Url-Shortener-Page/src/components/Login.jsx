import { useAuth0 } from '@auth0/auth0-react'

export function Login () {
  const { loginWithRedirect } = useAuth0()
  const handleLogin = async () => {
    await loginWithRedirect()
    console.log(window.location.search)
    window.location.replace()
    // setCode(code)
  }

  return (
    <div className='pop'>
      <h2>Want more features?</h2>
      <span>Nulla irure nostrud minim velit ullamco velit cupidatat pariatur reprehenderit labore.Ullamco consectetur eu et elit.</span>
      <div className='pop-login'>
        <button onClick={() => handleLogin()}>Sing up</button>
        <button>Login</button>
      </div>
    </div>
  )
}
