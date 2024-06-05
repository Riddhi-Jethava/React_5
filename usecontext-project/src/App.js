import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
