import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './movieCard.css'
import FilterRate from '../filterRate/FilterRate'

// MovieCard component that displays the movie card with the movie properties
const MovieCard = ({movie}) => {
  // console.log(movie)
  return (
    <div className='card'>
      <Card style={{ width: '18rem' }}>
      <Card.Img className='poster' variant="top" src= {movie.posterUrl} />
      <Card.Body>
        <Card.Title className='title'>{movie.title}</Card.Title>
        <Card.Text className='description'>
          {movie.description}
          <FilterRate isRating = {false} rate = {movie.rate}/>
        </Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard
