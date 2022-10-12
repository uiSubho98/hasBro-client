
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import SignUp from './components/SignUp/SignUp';
import RequireAuth from './components/RequireAuth/RequireAuth'
import Purchase from './components/Purchase/Purchase'
import Dashboard from './components/Dashboard/Dashboard';
import MyOrders from './components/Dashboard/MyOrders';
import Review from './components/Dashboard/Review';
import MyProfile from './components/Dashboard/MyProfile';
import Users from './components/Dashboard/Users';
import ManageOrders from './components/Dashboard/ManageOrders';
import RequireAdmin from './components/RequireAdmin/RequireAdmin';
import AddProduct from './components/Dashboard/AddProduct';
import Payment from './components/Dashboard/Payment';
import ManageProducts from './components/Dashboard/ManageProducts';
import "swiper/css/bundle";
import MyPortfolio from './components/MyPortfolio/MyPortfolio'
import Footer from './components/Footer/Footer';
import Blogs from './components/Blogs/Blogs'
function App() {

  return (
    <div >
     <Navbar></Navbar>
     <Routes>
       <Route path={'/'} element={<Home></Home>}></Route>
       <Route path={'/home'} element={<Home></Home>}></Route>
       <Route path={'/blogs'} element={<Blogs></Blogs>}></Route>
       <Route path={'/login'} element={<Login></Login>}></Route>
       <Route path={'/myportfolio'} element={<MyPortfolio></MyPortfolio>}></Route>
       <Route path={'/purchase/:id'} element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
       <Route path={'/dashboard'} element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
      <Route index element={<MyOrders></MyOrders>}></Route>
      <Route path='review' element={<Review></Review>}></Route>
      <Route path='payment/:id' element={<Payment></Payment>}></Route>
      <Route path='makeadmin' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
      <Route path='addproduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
      <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
      <Route path='manageorders' element={<ManageOrders></ManageOrders>}></Route>
      <Route path='manageproducts' element={<ManageProducts></ManageProducts>}></Route>
       </Route>
       <Route path={'/signup'} element={<SignUp></SignUp>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
