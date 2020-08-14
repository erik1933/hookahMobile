import React from 'react';

//styles
import './App.css';

// pages
import Search from "./pages/Search";
import AddMix from "./pages/AddMix";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <hr style={{margin: '10px 0', height: '8px', backgroundColor: 'dimgrey'}} />
        <AddMix />
      </div>
    </div>
  );
}

export default App;
