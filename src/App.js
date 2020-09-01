import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom'

//styles
import './App.css';

// pages
import Mainpage from "./pages/Mainpage";
import Search from "./pages/Search";
import AddMix from "./pages/AddMix";
import Mix from "./pages/Mix";


function App() {
  return (
    <div className="App">
      <div className="container">
        <Switch>
          <Route exact path='/' component={Mainpage} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/mix' component={Mix} />
          <Route exact path='/addmix' component={AddMix} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
