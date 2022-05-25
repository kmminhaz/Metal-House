import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/HomePage/Home';
import NavBar from './Pages/Navigation/NavBar';

function App() {
  return (
    <div className='App'>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
