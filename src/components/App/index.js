import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';

import Navbar from '../Navigation/navbar';
import SignIn from '../Auth/signIn';
import SignUp from '../Auth/signUp';
import CreateProject from '../Projects/createProject';
import Dashboard from '../Dashboard/dashboard';
import  ProjectDetails  from '../Projects/projectDetails';
import  ProjectEdit  from '../Projects/projectEdit';
import Home from '../Home/home';



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
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/createProject" component={CreateProject}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/edit/:id' component={ProjectEdit} />
          </Switch>
        </div>
      </AuthIsLoaded>
    </BrowserRouter>
  );
}

export default App;
