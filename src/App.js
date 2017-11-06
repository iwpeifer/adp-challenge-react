import React, { Component } from 'react';
import './App.css';

import Character from './components/Character/Character';
import Selector from './components/Selector/Selector';

import { characters } from './characters.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: characters[0],
      films: [],
    }
  }

  select = (character) => {

    let fetchFilmData = (films) => {
      films.forEach(film => {
        fetch(film)
          .then(response => response.json())
          .then(json => this.setState({
            films: [...this.state.films, json]
          }))
      })
    }

    return fetch(character.url)
      .then(response => response.json())
      .then(json => fetchFilmData(json.films))
  }

  render() {
    return (
      <div className='App'>
        <Selector characters={characters} select={this.select} selected={this.state.selected}/>
      </div>
    )
  }
}

export default App;
