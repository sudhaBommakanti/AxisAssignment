import React, { Component } from 'react';
import { Search, Grid, Header, Segment, Label } from 'semantic-ui-react';

class SearchBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading : false
        };
    }
    
    componentDidMount() {
    
    }
    render() {
        const { isLoading } = this.state;
        return(
          <Grid className="searchGrid">
            <Grid.Column width={4}>
              <Search
                loading={isLoading}
              />
            </Grid.Column>
          </Grid>
        );
    }
    

}
export default SearchBox;