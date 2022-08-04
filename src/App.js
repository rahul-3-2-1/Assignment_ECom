
import './App.css';
import {Route,Routes} from 'react-router-dom';
import ProductList from './Page/ProductList';

function App() {
  return (
    <div>
      <Routes>
    
    <Route path='/' element={<ProductList/>}/>
    </Routes>
   
     
    </div>
  );
}

export default App;
