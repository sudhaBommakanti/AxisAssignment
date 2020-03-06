import React from 'react';
import  Movie  from '../movie/movie.component';
import './movie-list.styles.css';

class MovieList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className='movie-list'>
        {this.props.movies.map((movie, index) => (
          <Movie key={index} movie={movie} />
        ))
        }
      </div>
    );
  }
}

MovieList.defaultProps = {
  movies: []
};

export default MovieList;