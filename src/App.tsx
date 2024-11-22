import NavBar from './NavBar/NavBar';
import { Outlet } from 'react-router';

function App() {
  
  return (
    <>
    <NavBar/>
    <Outlet/>
    </>
  );
}

export default App;
