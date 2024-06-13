export function Login ({ handleCode }) {
  return (
    <div className='pop'>
      <h2>Want more features?</h2>
      <span>Nulla irure nostrud minim velit ullamco velit cupidatat pariatur reprehenderit labore.Ullamco consectetur eu et elit.</span>
      <div className='pop-login'>
        <button onClick={() => handleCode()}>Sing up</button>
        <button>Login</button>
      </div>
    </div>
  )
}
