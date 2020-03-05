import React, { Component } from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import './movie.styles.css';

export class Movie extends Component {
     
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    onClickReview() {
        this.props.history.push(this.props.movie.link.url);
    }

    render() {
        return(
            <div className='movie-container'>
            <Card>
                <Image floated='right' size='mini' src={this.props.movie.multimedia.src} wrapped ui={false} />
                <Card.Content>
                <Card.Header><strong>Title :</strong> {this.props.movie.display_title}</Card.Header>
                <Card.Meta><strong>Rating :</strong> {this.props.movie.mpaa_rating}</Card.Meta>
                <Card.Description>
                        <strong>Summary :</strong> { this.props.movie.summary_short }<br />
                        <strong>Critics_pick :</strong> {this.props.movie.critics_pick} <br />
                        <strong>Critic :</strong> {this.props.movie.byline}
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <div>
                <a href={this.props.movie.link.url} target="https://www.nytimes.com/reviews/movies">
                    <Button size="small" basic color='green'>
                        Read Review
                    </Button>
                </a>
                </div>
                </Card.Content>
            </Card>
            {/* <Card>
                <Card.Content>
                  <Image
                    floated='right'
                    size='small'
                    src={this.props.movie.multimedia.src}
                    />
                    <Card.Header> Title: {this.props.movie.display_title}</Card.Header>
                    <Card.Meta>
                        <span className='date'>Rating : {this.props.movie.mpaa_rating} </span>
                    </Card.Meta>
                    <Card.Description>
                        Summary : { this.props.movie.summary_short }<br />
                        Critics_pick : {this.props.movie.critics_pick} <br />
                        Critic : {this.props.movie.byline}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <div>
                <a href={this.props.movie.link.url} target="_blank">
                    <Button size="small" basic color='green'>
                        Read Review
                    </Button>
                </a>
                </div>
          </Card.Content>
            </Card> */}
            </div>
        );
    }

} 
