import React, {useState} from 'react';
import './App.css';
import Header from './components/layout/Header'
import NoteList from './components/pages/notes/NoteList'
import LoginForm from './components/pages/login/LoginForm';
import {Route, Switch, RouteProps, Redirect} from 'react-router-dom'
import SignupForm from './components/pages/login/SignupForm';


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [loggedUser, setLoggedUser] = useState("")

  function login(email){
    setLoggedIn(true)
    setLoggedUser(email)
    localStorage.setItem('loggedEmail', email);
  }

  return (
    <div className="App">
        <Header/>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Redirect to='/login'/> 
            </Route>
            <Route path="/login" render={(props) => <LoginForm {...props} login={login} />}></Route>
            <Route component={SignupForm} exact path="/signup"></Route>
            <Route path="/notes" render={(props) => <NoteList {...props} loggedUser={loggedUser} />}></Route>
          </Switch>
        </div>
    </div>
  );
}

export default App;
