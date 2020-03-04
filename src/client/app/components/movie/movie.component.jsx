import React from 'react';
import { Card } from 'semantic-ui-react'
import './movie.styles.css';
export const Movie = (props) => (
    <div className='movie-container'>
        <Card>
            <Card.Content>
                <Card.Header> Title: {props.movie.display_title}</Card.Header>
                <Card.Meta>
                    <span className='date'>Rating : {props.movie.mpaa_rating} </span>
                </Card.Meta>
                <Card.Description>
                    Critics_pick : {props.movie.critics_pick} <br />
                    Critic : {props.movie.byline}
                </Card.Description>
            </Card.Content>
        </Card>
        {/* <img 
            alt= 'movie'
            src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
        /> */}
        {/* <h2>{ props.movie.display_title }</h2>
        <p>{ props.movie.critics_pick }</p> */}
    </div>
)