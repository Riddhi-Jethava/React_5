import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import AboutUs from './Components/AboutUs';
import Shop from './Components/Shop';
import Portfolio from './Components/Portfolio';
import Blog from './Components/Blog';
import Elements from './Components/Elements';
import Home2 from './Components/Home2';

function App() {
  return (
    <>
    <Router>
      <div className='App'>
        <NavBar/>
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Home2 />}></Route>
          <Route path='/about' element={<AboutUs />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
          <Route path='/port' element={<Portfolio />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/ele' element={<Elements />}></Route>
        </Routes>
      </div>
    </Router>      
    </>
  );
}

export default App;
