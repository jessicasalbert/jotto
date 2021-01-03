import './App.css';
import React, { Component } from 'react';

import GuessedWords from './GuessedWords/GuessedWords'
import Congrats from './Congrats/congrats'
import Input from './Input/Input'

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Input/>
        <Congrats success={false}/>
        <GuessedWords guessedWords={[
          { guessedWord: 'train', letterMatchCount: 3 }
        ]}/>
      </div>
    )
  }

}

export default App;
