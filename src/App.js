import './App.css';
import Navbar from './components/navbar'; 
import Basket from './components/basketModal';

// the below needs to be on the adopt page/section and then passed to the Basket function
const [selectedCats, setSelectedCats] = useState({
  catName: "", catBreed: "", catImgSrc: ""});


function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Cats for Life - Coming Soon!
        </p>
        <p>
      created by Chris Kelly, Chloe Moss, Idnan Hussain and Nathan Hynes
        </p>
        
      </header>
=======

      <Navbar />
    
      <h1>
        Cats 4 Life - Coming Soon!
      </h1>
      <Basket selectedCats={selectedCats} />
      <p>
        Created by Chris Kelly, Chloe Moss, Idnan Hussain and Nathan Hynes
      </p>
    <Footer/>

    </div>
  );
}

export default App;
