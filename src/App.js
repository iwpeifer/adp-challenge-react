import React, { Component } from 'react';
// import { } from 'react-bootstrap';
import './App.css';

import Selector from './components/Selector/Selector';
import Film from './components/Film/Film';
import Info from './components/Info/Info';

import { characters } from './characters.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: '',
      films: [],
      isLoading: false,
      info: false,
    }
  }

  resetState = () => {
    this.setState({
      selected: '',
      films: [],
      isLoading: false,
      info: false,
    })
  }

  select = (character) => {
    // Defines a function that fetches film data from API, sorts them by episode #
    let fetchFilmData = (films) => {
      let fetchedFilms = [];
      let fetchedFilmsCounter = 0;
      // if there are films, complete Ajax requests for each one
      if (films) {
        films.forEach(film => {
          fetch(film)
            .then(response => response.json())
            .then(json => fetchedFilms.push(json))
            .then(() => {
              fetchedFilmsCounter++
              // State is not changed until all film data has been fetched, sets isLoading to false
              // Also sorts films by episode_id
              if (fetchedFilmsCounter === films.length) {
                this.setState({
                  films: fetchedFilms.sort((a, b) => {
                    return a.episode_id - b.episode_id;
                  }),
                  isLoading: false,
                })
              }
            })
        })
        // If there are no films, return an error
      } else {
        alert("An error has occured; no films have been found.")
        this.resetState();
      }
    }

    // Resets this.state, sets isLoading to true, sets selected character
    this.resetState();
    this.setState({
      isLoading: true,
      selected: character,
    })

    // Uses character URL and fetchFilmData() to fetch film URLs
    return fetch(character.url)
      .then(response => response.json())
      .then(json => fetchFilmData(json.films))
  }

  toggleInfo = () => {
    this.setState({
      info: true,
      films: [],
      selected: '',
    })
  }

  renderFilms = () => {
    return (
      <div className='Film-container'>
        {this.state.info ? <Info/> : null}
        {this.state.selected.name}
        {this.state.isLoading ? <h1>LOADING...</h1> : null}
        {this.state.films.map((film, i) => {
          return (
            <Film key={i} film={film} />
          )
        })}
      </div>
    )
  }

  render() {
    return (
      <div className='App'>
        <Selector characters={characters} select={this.select} isLoading={this.state.isLoading} toggleInfo={this.toggleInfo}/>
        {this.renderFilms()}
        Code Challenge for ADP by Isaac Peifer (c) 2017
      </div>
    )
  }
}

export default App;
