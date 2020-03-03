import React from 'react';
import './movie-list.styles.css';
import { Movie } from '../movie/movie.component';
export const MovieList = props => {
    return (
        <div className = 'movie-list'>
          { props.movies.map(movie => (
              <Movie key={movie.id} movie = {movie} />
              )) }
        </div>
    )
};