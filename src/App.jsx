import { Outlet } from "react-router-dom";
// import Header from "./components/Header.jsx";

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Footer from './Components/Footer.jsx'
import Header from './components/Header.jsx'
import './assets/css/Navbar.css';
import './assets/css/Footer.css'



function App() {
  return (
    <div className="">
      {/* <Header/> */}
      <Outlet />
<Header/>
<Footer/>
    </div>
  );
}

export default App;
