import React from 'react'

function MovieDetailDisplay({id, title, releaseDate, thumbnail}) {
  return (
      <>
        <h1>{title}</h1>
        <img src={thumbnail}></img>
        <h3>{releaseDate}</h3>
      </>
    
  )
}

export default MovieDetailDisplay