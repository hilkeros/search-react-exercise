import React, { Component } from 'react';
import SearchBox from './Components/SearchBox'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBox />
        <div className="MainContent">
        	SOME OTHER CONTENT HERE SOME OTHER CONTENT HERE
        </div>
      </div>
    );
  }
}

export default App;
