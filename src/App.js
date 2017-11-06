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

  // componentDidUpdate(state, props){
  //   alert('yahoo lol')
  // }

  select = (character) => {
    //Fetches film data from API
    let fetchFilmData = (films) => {
      let fetchedFilms = [];
      let fetchedFilmsCounter = 0;
      films.forEach(film => {
        fetch(film)
          .then(response => response.json())
          .then(json => fetchedFilms.push(json))
          .then(() => {
            console.log(fetchedFilms)
            fetchedFilmsCounter++
            if (fetchedFilmsCounter === films.length - 1) {
              this.setState({
                films: fetchedFilms
              })
            }
          })
      })
    }

    //Resets this.state.films to an empty array
    this.setState({
      films: []
    })
    //Uses character URL to fetch film URLs
    return fetch(character.url)
      .then(response => response.json())
      .then(json => fetchFilmData(json.films))
      .then(() => alert('lol'))
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
