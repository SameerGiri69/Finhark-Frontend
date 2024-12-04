import { ToastContainer, toast } from 'react-toastify';
import { Outlet } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./Context/useAuth";
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <>
      <UserProvider>
        <NavBar />
        <Outlet />
        <ToastContainer />
      </UserProvider>
    </>
  );
}

export default App;
