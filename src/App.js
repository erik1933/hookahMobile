import React from 'react';

//styles
import './App.css';

// pages
import Search from "./pages/Search";
import AddMix from "./pages/AddMix";
import Mix from "./pages/Mix";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Mix />
      </div>
    </div>
  );
}

export default App;
