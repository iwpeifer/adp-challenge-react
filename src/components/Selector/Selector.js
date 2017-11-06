import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import './Selector.css';

export default (props) => {

  let renderCharacterButtons = () => {
    return (
      <ButtonToolbar className='toolbar'>
        {props.characters.map((character, i) => {
          return <Button bsStyle='primary' key={i} onClick={() => props.select(character)}>{character.name}</Button>
        })}
        <Button bsStyle='info' onClick={() => props.toggleInfo()}>Info</Button>
      </ButtonToolbar>
    )
  }

  return (
    <div className='Selector'>
      <h3>Select a Character:</h3>
      {renderCharacterButtons()}
    </div>
  )
}
