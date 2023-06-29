import './App.css';
import Basket from 'basketModal';

// the below needs to be on the adopt page/section and then passed to the Basket function
const [selectedCats, setSelectedCats] = useState([
  catName: "", catBreed: "", catImgSrc: ""
]);


function App() {
  return (
    <div className="App">
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
