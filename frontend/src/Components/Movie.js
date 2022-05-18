import React from 'react'
import { Link } from 'react-router-dom'

export default function Movie({movie}) {

  const movieData = {movie}

  const handleSelectedMovie = () => {
    console.log(movieData)
  }




  return (
    <div className='movie'>
        <img className='movie_thumbnail' src={movie.thumbnail} />
        <div className='movie_text'>
          <h5>{movie.title}</h5>
          <p>{movie.releaseDate}</p>
        </div>
        <Link to="/MovieDetail">
          <button className='movie_button' onClick={handleSelectedMovie} > Détails</button>
          </Link>
    </div>
  )
}