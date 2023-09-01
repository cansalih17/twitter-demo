import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-400 to-blue-600 text-white">
            <div className="bg-white text-blue-400 p-4 rounded-full absolute top-5 left-5">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M8.293 3.293a1 1 0 011.414 0l7 7a1 1 0 01-1.414 1.414L10 5.414 3.707 11.707a1 1 0 01-1.414-1.414l7-7z"
                        clipRule="evenodd"
                    />
                    <path
                        fillRule="evenodd"
                        d="M4 10a6 6 0 1112 0 6 6 0 01-12 0z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
            <h1 className="text-4xl font-bold mb-4">Twitter Clone</h1>
            <nav className="bg-opacity-70 bg-white p-3 rounded-lg backdrop-blur-lg">
                <ul className="flex space-x-6">
                    <li className="text-blue-400 hover:underline">Eğlence</li>
                    <li className="text-blue-400 hover:underline">Deneyim</li>
                    <li className="text-blue-400 hover:underline">Bilim</li>
                    <li className="text-blue-400 hover:underline">Sanat</li>
                </ul>
            </nav>
            <div className="mt-10 text-center">
                <p className="text-xl">Twitter deneyimini yaşamak için giriş yap veya kayıt ol</p>
                <Link to="/Login" className='bg-blue-400 inline-block hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-full mt-4 focus:outline-none'>Giriş Yap / Kayıt Ol</Link>
                
            </div>
        </div>
    )
}

export default Home