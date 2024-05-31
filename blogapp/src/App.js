import './App.css';
//bootstarp
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Component/HomePage';
import AddPage from './Component/AddPage';
import { useState } from 'react';

function App() {
  const[posts , setPosts] = useState([])

  function addEmployee(image){
    let newAdd = {
      id: new Date().getTime(),
      image: image
    }
    setPosts([...posts, newAdd])
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage posts={posts}/>}></Route>
          <Route path='/addEmployee' element={<AddPage addEmployee={addEmployee}/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
