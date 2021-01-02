import './App.css';
import React, { Component } from 'react';

import GuessedWords from './GuessedWords/GuessedWords'
import Congrats from './Congrats/congrats'

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={true}/>
        <GuessedWords guessedWords={[
          { guessedWord: 'train', letterMatchCount: 3 }
        ]}/>
      </div>
    )
  }

}

export default App;
