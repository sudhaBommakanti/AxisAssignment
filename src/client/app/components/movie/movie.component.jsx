import React from 'react';
import './movie.styles.css';
export const Movie = (props) => (
    <div className = 'movie-container'>
        <img 
            alt= 'movie'
            src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
        />
        <h2>{ props.movie.name }</h2>
        <p>{ props.movie.review }</p>
    </div>
)