import { useEffect, useState } from 'react';
import jwt from "jwt-decode";

import { Footer, Navbar } from './components';
import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import { CreatePost, Home, Login, Signup } from './pages';

import './App.css';

function App() {
  const [user, setUser] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const token = localStorage.getItem("token")
    token && jwt(token) ? setUser(true) : setUser(false)
  }, [])


  useEffect(() => {
    localStorage.setItem("user", user)
  }, [user])


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login authenticate={() => setUser(true)} />} />
        <Route path="/signup" element={<Signup />} />
        {user && (
          <Route path="/createpost" element={<CreatePost />} />
        )}
        <Route path="*" element={<Navigate to="/login" state={{ from: location }} replace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
