import React, { Component } from 'react';
import  MovieList  from './components/movie-list/movie-list.component';
import SearchBox from './components/search-box/search-box.component';
import Footer from './components/Footer';
import { Loader } from 'semantic-ui-react';
import './App.css';

const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=';
const API_KEY = '&api-key=alHlcZwkT3JYQS8fHbnZwJmY5yWZS07j';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchField: '',
      loading: false,
      error: null
    }
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * Called when the component is mounted to get the list of movie reviews array.
   * @public
   */
  async getMovies() {
    const { searchField } = this.state;
    this.setState({ loading: true })
    fetch(URL + searchField + API_KEY)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(movies => this.setState({ movies: movies.results, loading: false }))
      .catch(error => this.setState({ error, loading: false }));
  }

  async componentDidMount() {
    setTimeout(() => {
      this.getMovies()
    }, 1000);
  }

  /**
   * Called when a new event occurs on a search field with this.
   * @param {field}   event   The event field with the search parameter.
   * sets the state of the search field with the event target value.
   */
  handleChange(e) {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { movies, searchField, loading } = this.state;
    const filteredMovies = movies.filter(movie =>
      movie.display_title.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1> Movie Review </h1>
        <SearchBox
          search={searchField}
          placeholder='Search Movies'
          handleChange={this.handleChange}
        />
        { loading ? <Loader style={{ marginTop: 20 }} content='Loading' active inline='centered' /> : <MovieList
          movies={filteredMovies}
        /> }
        <Footer />
      </div>
    );
  }
}
export default App;