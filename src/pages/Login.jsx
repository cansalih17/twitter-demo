import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { emailFunc, login } from '../redux/authSlice';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const loginFunc = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(data => {
        dispatch(login());
        dispatch(emailFunc(email));
        navigate("/tweetpage")
      })
      .catch(error => {
        setError(error);
      });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Giriş Yap</h2>
        {error && <p className="text-red-500 mb-4">{error.message}</p>}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">E-posta</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="E-posta adresinizi girin"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Şifre</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Şifrenizi girin"
          />
        </div>
        <button
          onClick={() => loginFunc()}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
        >
          Giriş Yap
        </button>
        <p className="text-gray-600 text-center mt-2">
          Hesabınız yok mu?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Kayıt Olun
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
