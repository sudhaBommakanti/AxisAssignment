import React, { Component } from 'react';
import PageContainer from '../components/PageContainer';
import MovieList from '../components/MovieList';

class MoviePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
         
        };
      }
      render() {
    
        return (
        <PageContainer>
            <MovieList/>
        </PageContainer>
          
        
        );
      }

}

export default MoviePage;