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
          <Route exact path='/hookahMobile/' component={Mainpage} />
          <Route exact path='/hookahMobile/search' component={Search} />
          <Route exact path='/hookahMobile/mix' component={Mix} />
          <Route exact path='/hookahMobile/addmix' component={AddMix} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
