import './App.css';
import Navbar from './components/navbar'; 
import HomePage from './components/homePage';
import TopCats from './components/topCats';
import Rehoming from './components/rehoming';
import Footer from './components/Footer';
import Product from './components/product';
import WebFooter from './components/webFooter';
import Basket from './components/basketModal';
import { useState } from "react";
import Product from './components/product';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/homePage';


// the below needs to be on the adopt page/section and then passed to the Basket function
const [selectedCats, setSelectedCats] = useState({
  catName: "", catBreed: "", catImgSrc: ""});
function addToBasket(cat){
  setSelectedCats(selectedCats+=cat);
}

function App() {
  return (
    <Router>
    <div className="App">
    
    <Navbar />

    <div className="content">
      <Switch>
        <Route exact path="/">
          <HomePage />
          <TopCats />
          <Rehoming />
          <Footer />
          <WebFooter />
        </Route>
        
        <Route exact path="/rehoming">
          <Rehoming />
        </Route>

        <Route exact path="/adopt">
          <Product />
        </Route>

      

=
      </Switch>
      
      </div>
    </div>
    </Router>
  );
}

export default App;