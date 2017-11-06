import React, { Component } from 'react';
import './Character.css';

import Film from '../Film/Film'

export default class Character extends Component {
  constructor() {
    super();
    this.state = {
      isSelected: false,
      data: '',
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    return fetch(this.props.character.url)
    .then(response => response.json())
    .then(json => this.setState({
      data: json
    }))
  }

  renderFilms = () => {
    return (
      <div className='Film-container'>
        {this.state.data.films.map((film, i) => <Film url={film} key={i}/>)}
      </div>
    )
  }

  toggle = () => {
    this.setState({isSelected: !this.state.isSelected});
  }

  render(){
    return (
      <div className='Character'>
        <button onClick={this.toggle}>{this.props.character.name}</button>
        {this.state.isSelected && !!this.state.data ?
          this.renderFilms() : null}
      </div>
    )
  }
}
