import React from 'react';
import './App.css';
import Header from './components/layout/Header'
import NoteList from './components/pages/notes/NoteList'
import LoginForm from './components/pages/login/LoginForm';
import {Route, Switch} from 'react-router-dom'
import SignupForm from './components/pages/login/SignupForm';


function App() {

  return (
    <div className="App">
        <Header/>
        <div className="container">
          <Switch>
            <Route component={LoginForm} exact path="/login"></Route>
            <Route component={SignupForm} exact path="/signup"></Route>
            <Route component={NoteList} exact path="/notes"></Route>
          </Switch>
        </div>
    </div>
  );
}

export default App;
