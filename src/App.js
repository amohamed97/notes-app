import React from 'react';
import './App.css';
import Header from './components/Header'
import NoteList from './components/NoteList'

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="container">
          <NoteList/>
        </div>
    </div>
  );
}

export default App;
