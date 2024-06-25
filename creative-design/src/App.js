import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import InputBox from "./Components/InputBox";
import TextImage from "./Components/TextImage";
import GlassNavbar from "./Components/GlassNavbar";

function App() {
  return (
    <Router>
      <div className="App">
        <GlassNavbar />
        <Routes>
          {/* <Route path="/nav" element={<GlassNavbar />}></Route> */}
          <Route path="/inpbox" element={<InputBox />}></Route>
          <Route path="/textimg" element={<TextImage />}></Route>
        </Routes>
      </div >
    </Router >
  );
}

export default App;
