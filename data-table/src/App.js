import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Components/Home";
import Add from "./Components/Add";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  function addProducts(title, content, number,image) {
    let newProduct = {
      id: new Date().getTime(),
      title: title,
      content: content,
      number: number,
      image: image
    };
    setPosts([...posts, newProduct])
  }

  function handleDelete(id) {
    setPosts(posts.filter((el) => (
      el.id !== id
    )))
  }
  

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home posts={posts} handleDelete={handleDelete}/>}></Route>
          <Route path="/add" element={<Add addProducts={addProducts} />}></Route>
        </Routes>
      </div>
    </Router>
  );
}


export default App;
