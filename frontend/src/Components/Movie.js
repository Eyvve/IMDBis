import React from 'react'
import { Link } from 'react-router-dom'

export default function Movie({movie, setMoviedata}) {

  // const movieData = {movie}

  const handleSelectedMovie = () => {
    setMoviedata(movie.id)
    // console.log(movieData)
  }




  return (
    <div className='movie'>
        <img className='movie_thumbnail' src={movie.thumbnail} />
        <div className='movie_text'>
          <h6>{movie.title}</h6>
          <p>{movie.releaseDate}</p>
        </div>
        <Link to="/MovieDetail">
          <button className='btn btn-primary' onClick={handleSelectedMovie} > Détails</button>
          </Link>
    </div>
  )
}