import './App.css';
import Navbar from './components/navbar'; 


import Basket from 'basketModal';

function App() {
  return (
    <div className="App">

      <Navbar />
    
      <h1>
        Cats 4 Life - Coming Soon!
      </h1>
      <Basket />
      <p>
        Created by Chris Kelly, Chloe Moss, Idnan Hussain and Nathan Hynes
      </p>
    </div>
  );
}

export default App;
