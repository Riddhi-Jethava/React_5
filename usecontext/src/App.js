import React from "react";
import ThemeProvider from "./ThemeProvider";
import ToggleTheme from "./ToggleTheme";
import ThemeComponent from "./ThemeComponent";
import './App.css';

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div className="App">
        <ThemeProvider>
          <ToggleTheme/>
          <ThemeComponent/>
        </ThemeProvider>
    </div>
  );
}

export default App;
