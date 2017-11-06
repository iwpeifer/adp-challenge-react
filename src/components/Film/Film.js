import React, { Component } from 'react';
import './Film.css';

export default class Film extends Component {
  constructor() {
    super();
    this.state = {
      data: '',
    }
  }

  componentDidMount = () => {
    return fetch(this.props.url)
    .then(response => response.json())
    .then(json => this.setState({
      data: json
    }))
  }

  // fetchFilms = () => {
  //   return fetch(this.props.character.url)
  //   .then(response => response.json())
  //   .then(json => this.setState({
  //     films: json.films
  //   }))
  // }
  //
  // renderFilms = () => {
  //   return (
  //     <div>
  //       {this.state.films.map((film, i) => <Film url={film} key={i}/>)}
  //     </div>
  //   )
  // }
  //
  toggle = () => {
    this.setState({isSelected: !this.state.isSelected});
    this.fetchFilms();
  }

  render(){
    return (
      <div className='Film'>
        <button onClick={this.toggle}>{this.state.data.title}</button>
      </div>
    )
  }
}
