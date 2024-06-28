/* eslint-disable no-undef */
import { useEffect, useState } from 'react'
import '../App.css'
import { copyText } from '../logic/copy.js'
import { CopyLogo } from './CopyLogo.jsx'
import toast, { Toaster } from 'react-hot-toast'

export function Link ({ children, handleResponse }) {
  const [data, setData] = useState('')
  const [copy, setCopy] = useState(false)

  const shortLink = () => {
    const input = document.querySelector('.pop-input input')
    const link = { url: input.value }
    const token = JSON.parse(localStorage.getItem('token'))
    // Realizar la petición POST
    fetch(`${import.meta.env.VITE_URL_API}/api/shorturl/`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : ''
      },
      method: 'POST',
      body: JSON.stringify(link)
    })
      .then(response => response.json())
      .then(result => {
        if (!result) {
          console.log('algo salió mal')
          console.log(result)
          toast('Error al acortar la URL, intente nuevamente')
        }
        setData(result.data)
        input.value = ''
      })
      .catch(error => {
        console.error('Error al acortar la URL:', error)
        toast('Error al acortar la URL, intente nuevamente')
      })
    // TODO: Agregar circulo de carga
  }

  useEffect(() => {
    if (data === null) {
      toast('Error al acortar la URL, intente nuevamente')
      console.log('algo salió mal')
      return
    }
    console.log('changing data', data)
    handleResponse(data)
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
            <span>{data.shortenUrl}</span>
            <CopyLogo copied={copy} handleCopy={handleCopy} />
          </div>
      }
      <Toaster toastOptions={{
        style: {
          backgroundColor: 'red',
          color: '#FFFF'
        }
      }}
      />
    </div>
  )
}
