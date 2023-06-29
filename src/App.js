import './App.css';
import Navbar from './components/navbar'; 
import Basket from './components/basketModal';
import { useState } from "react";
import './homepage.js';


// the below needs to be on the adopt page/section and then passed to the Basket function
const [selectedCats, setSelectedCats] = useState({
  catName: "", catBreed: "", catImgSrc: ""});


function App() {
  return (
    <div className="App">

      <Navbar />
    
      <h1>
        Cats 4 Life - Coming Soon!
      </h1>
      <Basket selectedCats={selectedCats} />
      <p>
        Created by Chris Kelly, Chloe Moss, Idnan Hussain and Nathan Hynes
      </p>
    </div>
  );
}

export default App;