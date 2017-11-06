import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './Film.css';

export default class Film extends Component {
  constructor() {
    super();
    this.state = {
      isToggled: false,
    }
  }

  formatDate = date => {
    return date.toLocaleString("en-us", { month: "long", weekday: "long", year: "numeric", day: "numeric"});
  }

  toggle = () => {
    this.setState({
      isToggled: !this.state.isToggled
    })
  }

  renderInfo = date => {
    return (
      <div className='Film-info'>
        <p>Released: {this.formatDate(date)}</p>
        <p>Director: {this.props.film.director}</p>
        <div className='opening-crawl'>
          {this.props.film.opening_crawl}
        </div>
      </div>
    )
  }


  render() {
    let date = new Date(this.props.film.release_date)
    return (
      <div className='Film'>
        <Button className="film-button" bsSize="xsmall" onClick={() => this.toggle()}>Episode {this.props.film.episode_id}: {this.props.film.title}</Button>
        {this.state.isToggled ? this.renderInfo(date) : null}
      </div>
    )
  }
}
