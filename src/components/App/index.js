import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
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
import NoMatch from '../NoMatch/noMatch';


const AuthIsLoaded = ({ children }) => {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>Loading...</div>;
  return children
}

const Main = () => {
  return (   
    <AuthIsLoaded>            
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/project/create" component={CreateProject}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path='/project/:id' component={ProjectDetails} />
          <Route path='/edit/:id' component={ProjectEdit} />
          <Redirect to="/404" /> 
        </Switch>
      </div>
    </AuthIsLoaded>    
  );
}

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/404" exact component={NoMatch} />
      <Route path="/" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default App;
