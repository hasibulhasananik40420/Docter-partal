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
function App() {
  return (
    <div>

    <Navbar></Navbar>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/appointment" element={
          <RequireAuth><Appoinment /></RequireAuth>
        } />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer />
       <Footer></Footer>
    </div>
  );
}

export default App;
