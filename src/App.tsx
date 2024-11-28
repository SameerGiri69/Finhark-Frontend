import { Toast, ToastContainer } from 'react-toastify/dist/components';
import NavBar from './NavBar/NavBar';
import { Outlet } from 'react-router';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <>
    <NavBar/>
    <Outlet/>
    <ToastContainer/>
    </>
  );
}

export default App;
