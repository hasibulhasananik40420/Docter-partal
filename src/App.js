import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import SingUp from './Pages/SingUp/SingUp';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import Appoinment from './Pages/Appoinment/Appoinment';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyAppointment from './Pages/DashBoard/MyAppointment';
import MyReview from './Pages/DashBoard/MyReview';
import MyHistory from './Pages/DashBoard/MyHistory';
import AllUsers from './Pages/DashBoard/AllUsers';
function App() {
  return (
    <div>
   {/* 4mit */}
    <Navbar></Navbar>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/appointment" element={
          <RequireAuth><Appoinment /></RequireAuth>
        } />

         <Route path="/dashboard" element={<RequireAuth><DashBoard></DashBoard></RequireAuth>}>

         <Route index element={<MyAppointment></MyAppointment>}></Route>
         <Route path='review' element={<MyReview></MyReview>}></Route>
         <Route path='history' element={<MyHistory></MyHistory>}></Route>
         <Route path='users' element={<AllUsers></AllUsers>}></Route>

         </Route>
       
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer />
       <Footer></Footer>
    </div>
  );
}

export default App;
