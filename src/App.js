import { Footer, Navbar } from './components';
import { Route, Routes } from "react-router-dom"
import useFetch from './useFetch';
import './App.css';
import { CreatePost, Home } from './pages';


function App() {
  const url = "http://127.0.0.1:3000/posts"
  const [posts] = useFetch(url)
  console.log(posts);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
