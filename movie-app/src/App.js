import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieInput from './components/MovieInput'

class App extends Component {
  render() {
    return (
      <div>
        <MovieInput />
      </div>
    );
  }
}

export default App;
