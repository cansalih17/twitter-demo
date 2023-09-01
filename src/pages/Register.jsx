import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const registerFunc = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(data => {
        navigate("/login")
      })
      .catch(error => {
        setError(error);
      });
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Kayıt Ol</h2>
        {error && <p className="text-red-500 mb-4">{error.message}</p>}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">E-posta</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-green-500"
            placeholder="E-posta adresinizi girin"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Şifre</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-green-500"
            placeholder="Şifrenizi girin"
          />
        </div>
        <button
          onClick={() => registerFunc()}
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-500"
        >
          Kayıt Ol
        </button>
        <p className="text-gray-600 text-center mt-2">
          Hesabınız var mı?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Giriş yapın
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register