import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-500 text-white">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="text-lg mt-2">Aradığınız sayfa bulunamadı.</p>
      <Link to="/" className='bg-white text-blue-500 font-semibold py-2 px-4 rounded-full mt-4 hover:bg-blue-100 focus:outline-none focus:ring focus:border-blue-500'>Anasayfaya geri dön</Link>
    </div>
  )
}

export default NotFound