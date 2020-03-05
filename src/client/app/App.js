import React, { Component } from 'react';
import { MovieList } from './components/movie-list/movie-list.component';
import Footer from './components/Footer';
import  SearchBox  from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchField: '',
      loading: false
    }
     this.handleChange = this.handleChange.bind(this);
  }

 async componentDidMount() {
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + { query : this.state.searchField } + '&api-key=alHlcZwkT3JYQS8fHbnZwJmY5yWZS07j')
      .then(response => response.json())
      .then(movies => this.setState({ movies: movies.results }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { movies, searchField } = this.state;
    const filteredMovies = movies.filter( movie => 
        movie.display_title.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1> Movie Review </h1>
        <SearchBox
          search={searchField}
          placeholder='search movies'
          handleChange={this.handleChange}
        />
        <MovieList movies={filteredMovies} />
        <Footer />
      </div>
    );
  }
}
export default App;