import { Footer, Navbar } from './components';
import { Route, Routes } from "react-router-dom"
import './App.css';
import { CreatePost, Home, Login, Signup } from './pages';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
