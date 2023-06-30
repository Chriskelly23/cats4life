import './App.css';
import Navbar from './components/navbar'; 
import HomePage from './components/homePage';
import Product from './components/adopt';
import WebFooter from './components/webFooter';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import logo from "./components/images/00-logos/1.png";


// the below needs to be on the adopt page/section and then passed to the Basket function

function App() {
  return (
    <BrowserRouter>
    <img className="main-nav-image" src={logo} alt="logo" />
    <Navbar />
      <Routes>
        <Route path="./components/homePage" element={ <HomePage />} />
        <Route path="./components/product" element={ <Product />} />
      </Routes>
      <HomePage />
      <WebFooter />
    </BrowserRouter>
    
  );
}

export default App;