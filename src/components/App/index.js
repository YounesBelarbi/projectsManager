import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';

import Navbar from '../navigation/navbar';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';
import CreateProject from '../projects/CreateProject';
import Dashboard from '../dashboard/Dashboard';
import  ProjectDetails  from '../projects/ProjectDetails';
import  ProjectEdit  from '../projects/ProjectEdit';
import Home from '../home/home.js';



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
            <Route exact path="/home" component={Home}/>
            <Route exact path="/signin" component={SignIn}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/createProject" component={CreateProject}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/edit/:id' component={ProjectEdit} />
          </Switch>
        </div>
      </AuthIsLoaded>
    </BrowserRouter>
  );
}

export default App;
