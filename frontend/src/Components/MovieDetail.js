import React from 'react'
import useGetMovieDetails from '../Hooks/useGetMovieDetails'

import { useState, useEffect } from 'react';

function MovieDetail({moviedata}) {

  const [currentMovieDetails, setCurrentMovieDetails] = useState();

  const getMovieDetails = useGetMovieDetails()

  useEffect(() => {
    getMovieDetails()
        .then(data => {
            console.log(data)
            setCurrentMovieDetails(data)
        })
}, [])

  return (
    <div>{moviedata}</div>
  )
}

export default MovieDetail