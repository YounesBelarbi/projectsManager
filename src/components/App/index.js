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
            <Route exact path="/createProject" component={CreateProject}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route path='/project/:id' component={ProjectDetails} />
          </Switch>
        </div>
      </AuthIsLoaded>
    </BrowserRouter>
  );
}

export default App;
