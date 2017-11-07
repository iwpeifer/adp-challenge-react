import React from 'react';

export default () => {
  return (
    <div className='info'>
      <p>This app utilizes a provided JSON object that contains four Star Wars API (swapi.co) endpoints. I was tasked with retrieving information about each film the provided characters have been in, making sure that info was displayed only after *all* data was loaded.</p>
      <p>Click on a character to see a list of films, click on a film to see information.</p>
      <p>Made with React! Check out the Github repo here:</p>
      <a href='https://github.com/iwpeifer/adp-challenge-react' target="_blank" rel="noopener noreferrer">GitHub Repo</a>
    </div>
  )
}
