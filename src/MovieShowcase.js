import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    const movie = movieData;
    return movie.map((mov, index) =>
      <div key={index}>
        <MovieCard title={mov['title']} IMDBRating={mov['IMDBRating']} genres={mov['genres']} poster={mov['poster']} />
      </div>
    );
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
