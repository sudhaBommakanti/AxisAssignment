import React, { Component } from 'react';
import { Segment, Image } from 'semantic-ui-react';
import SearchBox from './SearchBox';

class PageHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {

    return (
      <Segment className = "headerSegment">
        <div className='headerImage' id="my_header">
          <div>
          <a href="/" className='menuToggle'>
            <Image  size='small' className='headerImage' src={require('../../images/clapperBoard.png')} style={{ height: 50, width: 50, float: 'left' }} />
          </a>
          </div>
          <div>
          <h1>Movie Review App</h1>
          </div>
          
          <div>
          <SearchBox/>
          </div>
        </div>
      </Segment>
    );
  }
}
export default PageHeader;