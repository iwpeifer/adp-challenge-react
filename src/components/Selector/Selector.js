import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import './Selector.css';

import Film from '../Film/Film'

export default class Character extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      data: '',
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    return fetch(this.props.characters[this.state.index].url)
    .then(response => response.json())
    .then(json => this.setState({
      data: json
    }))
  }

  renderCharacterButtons = () => {
    return (
      <ButtonToolbar className='toolbar'>
        {this.props.characters.map((character, i) => {
          return <Button bsStyle='primary' key={i} onClick={() => this.props.select(character)}>{character.name}</Button>
        })}
        <Button bsStyle='info' onClick={() => this.props.toggleInfo()}>Info</Button>
      </ButtonToolbar>
    )
  }

  render(){
    return (
      <div className='Selector'>
        <h3>Select a Character:</h3>
        {this.renderCharacterButtons()}
      </div>
    )
  }
}
