import React, { Component }from 'react';
import { MovieList } from './components/movie-list/movie-list.component';
import Footer from './components/Footer';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchField:''
     }
    //  this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // https://developer.nytimes.com/docs/movie-reviews-api/1/overview
    fetch( 'https://api.nytimes.com/svc/movies/v2/reviews/{type}.json')
    .then(response => console.log(response.json()))
    // .then(movies => this.setState( { movies : movies }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { movies, searchField } = this.state;
    const filteredMovies = movies.filter( movie => 
      movie.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1> Movie Review App </h1>
        <SearchBox 
            placeholder = 'search movies'
            handleChange = { this.handleChange } 
        />
        <MovieList movies= { filteredMovies }/>
        <Footer/>
      </div>
    ); 
  }
}
export default App;