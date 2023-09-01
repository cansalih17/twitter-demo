import React from 'react';
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import TweetPage from "./pages/TweetPage"
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={isAuthenticated ? <TweetPage /> : <Login />} />
        <Route path='/Register' element={isAuthenticated ? <TweetPage /> : <Register />} />
        <Route path='/TweetPage' element={isAuthenticated ? <TweetPage /> : <Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
