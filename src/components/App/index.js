import React from 'react';
import {  BrowserRouter, Route, Switch} from "react-router-dom";


import Navbar from '../navigation/navbar';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Projects Manager</h1>
        <Navbar/>
        <Switch>
          <Route exact path="/signin" component={SignIn}/>
          <Route exact path="/signup" component={SignUp}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
