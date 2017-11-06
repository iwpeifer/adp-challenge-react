import React, { Component } from 'react';
// import { } from 'react-bootstrap';
import './App.css';

import Selector from './components/Selector/Selector';
import Film from './components/Film/Film';

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
        this.setState({
          isLoading: false,
        })
      }
    }

    // Resets this.state.films to an empty array, isLoading to true
    this.setState({
      selected: character,
      films: [],
      isLoading: true,
      info: false,
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

  renderInfo = () => {
    return (
      <div className='info'>
        <p>This app utilizes a provided JSON object that contains four Star Wars API (swapi.co) endpoints. I was tasked with retrieving information about each film the provided characters have been in, making sure that info was displayed only after *all* data was loaded.</p>
        <p>Click on a character to see a list of films, click on a film to see information.</p>
        <p>Made with React! Check out the Github repo here:</p>
        <a href='https://github.com/iwpeifer/adp-challenge-react' target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      </div>
    )
  }

  renderFilms = () => {
    return (
      <div className='Film-container'>
        {this.state.info ? this.renderInfo() : null}
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
        <Selector characters={characters} select={this.select} selected={this.state.selected} toggleInfo={this.toggleInfo}/>
        {this.renderFilms()}
        Code Challenge for ADP by Isaac Peifer (c) 2017
      </div>
    )
  }
}

export default App;
