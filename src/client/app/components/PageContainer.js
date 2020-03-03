import React, { Component } from 'react';
import Footer from './Footer';
import { Container } from 'semantic-ui-react';
import PageHeader from './PageHeader';

export default class PageContainer extends Component {

    render() {
        return (
        <div className="fullHeight">
          <PageHeader />
          <Container fluid className={ this.props.padded ? 'pageContainer padded' : 'pageContainer'}>
            {this.props.children}
          </Container>
         <Footer /> 
         
        </div>
     
            // <div className="Container">
            //     <PageHeader title={this.props.title} link={'/'} />
            //     {this.props.children}
            //     <Footer />
            // </div>
        );
    }
}

PageContainer.defaultProps = {
    title: null
}