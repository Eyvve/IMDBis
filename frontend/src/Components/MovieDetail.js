import React from 'react'
import MovieComments from './MovieComments'

function MovieDetail({moviedata, loggedUser}) {

  return (
        <>
          <div className='moviedetail'>
            <h1>{moviedata.title}</h1>
            <img src={moviedata.thumbnail}></img>
            <h3>{moviedata.releaseDate}</h3> 
            <p>{moviedata.description}</p> 
          </div>
          <MovieComments movie={moviedata} loggedUser={loggedUser} />
        </>
  )
}

export default MovieDetail