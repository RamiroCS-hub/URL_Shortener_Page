import { useEffect, useState } from 'react'
import '../App.css'
import { URL_API } from '../constants/constants.js'
import { copyText } from '../logic/copy.js'
import { CopyLogo } from './CopyLogo.jsx'

export function Link ({ children, buttonFun }) {
  const [data, setData] = useState('')
  const [copy, setCopy] = useState(false)

  const shortLink = () => {
    const input = document.querySelector('.pop-input input')
    const data = { url: input.value }

    // Realizar la petición POST
    fetch(URL_API, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        if (!result) {
          console.log('algo salió mal')
          console.log(result)
          setData(null)
        }
        console.log(result)
        setData(result.data.shortenUrl)
        input.value = ''
      })
      .catch(error => {
        console.error('Error al acortar la URL:', error)
        setData(null)
      })
  }

  useEffect(() => {
    if (data === null) {
      console.log('algo salió mal')
      return
    }
    console.log('Se esta renderizando el effect con data:', data)
  }, [data])

  const handleCopy = async () => {
    copyText(data)
    setCopy(true)
    console.log(copy)
    setTimeout(() => setCopy(false), 2000)
  }

  return (
    <div className='pop'>
      <h2>{children}</h2>
      <div className='pop-input'>
        <input placeholder='Enter your link' />
        <button onClick={shortLink}>Short Link</button>
      </div>
      {
        data &&
          <div className='pop-response'>
            <span>{data}</span>
            <CopyLogo copied={copy} handleCopy={handleCopy} />
          </div>
      }

    </div>
  )
}
