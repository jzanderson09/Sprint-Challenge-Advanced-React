import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';

import NavBar from './components/NavBar';
import Players from './components/Players';

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
      darkMode: false
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
    .then(res => this.setState({ players: res.data }))
    .catch(err => console.log(err));
  }

  toggleDarkMode = () => {
    this.setState({ darkMode: !this.state.darkMode });
  }

  
  render() {
    return (
      <div className={`App ${this.state.darkMode}`}>
        <NavBar 
          darkMode={this.state.darkMode} 
          toggleDarkMode={this.toggleDarkMode} />
        <Players players={this.state.players} darkMode={this.state.darkMode} />
      </div>
    );
  }
}

export default App;
