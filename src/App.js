import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/HomePage/Home';
import Login from './Pages/LoginRegistrationPage/Login';
import Registration from './Pages/LoginRegistrationPage/Registration';
import NavBar from './Pages/Navigation/NavBar';
import Purchase from './Pages/PurchasePage/Purchase';
import AddProduct from './Pages/UsersPart/AddProduct/AddProduct';
import AddReview from './Pages/UsersPart/AddReview/AddReview';
import Dashboard from './Pages/UsersPart/Dashboard';
import MakeAdmin from './Pages/UsersPart/MakeAdmin/MakeAdmin';
import ManageOrder from './Pages/UsersPart/ManageOrder/ManageOrder';
import ManageProducts from './Pages/UsersPart/ManageProducts/ManageProducts';
import MyOrders from './Pages/UsersPart/MyOrders/MyOrders';
import Payment from './Pages/UsersPart/MyOrders/Payment';
import MyProfile from './Pages/UsersPart/MyProfile/MyProfile';

function App() {
  return (
    <div className='App'>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Registration />}></Route>
        <Route path='/purchase' element={<Purchase />}></Route>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<MyOrders />}></Route>
          <Route path='/dashboard/addreviews' element={<AddReview />}></Route>
          <Route path='/dashboard/myprofile' element={<MyProfile />}></Route>
          <Route path='/dashboard/payment' element={<Payment />}></Route>
          <Route path='/dashboard/addproduct' element={<AddProduct />}></Route>
          <Route path='/dashboard/makeadmin' element={<MakeAdmin />}></Route>
          <Route path='/dashboard/manageorder' element={<ManageOrder />}></Route>
          <Route path='/dashboard/manageproducts' element={<ManageProducts />}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
