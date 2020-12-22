import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';


import Navbar from '../navigation/navbar';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';


function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div></div>;
  return children
}

function App() {
  return (
    <BrowserRouter>
      <AuthIsLoaded>            
        <div className="App">
          <h1>Projects Manager</h1>
          <Navbar/>
          <Switch>
            <Route exact path="/signin" component={SignIn}/>
            <Route exact path="/signup" component={SignUp}/>
          </Switch>
        </div>
      </AuthIsLoaded>
    </BrowserRouter>
  );
}

export default App;
