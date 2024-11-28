import { ToastContainer, toast } from 'react-toastify';
import NavBar from "./NavBar/NavBar";
import { Outlet } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./Context/useAuth";

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
