import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

export default () => {

  let link = () => {
    window.open('https://github.com/iwpeifer/adp-challenge-react');
  }

  return (
    <div className='info'>
      <p>This app utilizes a provided JSON object that contains four Star Wars API (swapi.co) endpoints. I was tasked with retrieving information about each film the provided characters have been in, making sure that info was displayed only after *all* data was loaded.</p>
      <p>Click on a character to see a list of films, click on a film to see information.</p>
      <p>***Built with React***</p>
      <ButtonToolbar className='toolbar'>
        <Button bsSize="xsmall" onClick={() => link()}>GitHub Repo</Button>
      </ButtonToolbar>
    </div>
  )
}
