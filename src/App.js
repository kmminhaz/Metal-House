import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/HomePage/Home';
import Login from './Pages/LoginRegistrationPage/Login';
import Registration from './Pages/LoginRegistrationPage/Registration';
import NavBar from './Pages/Navigation/NavBar';
import Purchase from './Pages/PurchasePage/Purchase';

function App() {
  return (
    <div className='App'>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Registration/>}></Route>
        <Route path='/purchase' element={<Purchase/>}></Route>
        <Route path='/user-dashboard' element={<Purchase/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
