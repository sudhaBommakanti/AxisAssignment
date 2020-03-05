import React from 'react';
import './movie-list.styles.css';
import { Movie } from '../movie/movie.component';
export class MovieList extends React.Component {
    render() {
    return (
        <div className= 'movie-list'>
          { this.props.movies.map((movie, index) => (
              <Movie key={index} movie= {movie} />
            ))
          }
        </div>
    );
}
};