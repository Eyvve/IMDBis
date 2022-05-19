import React from 'react'
import { useEffect, useState } from 'react';
import useGetMovieList from '../Hooks/useGetMovieList';
import Movies from './Movies'

function AllMovies({setMoviedata}) {

    const [movielist, setMovielist] = useState([]);

    const getMovieList = useGetMovieList()

    useEffect(() => {
        getMovieList()
            .then(data => {
                console.log(data)
                setMovielist(data)
            })
    }, [])

  return (
    <div><Movies movielist={movielist} setMoviedata={setMoviedata} /></div>
  )
}

export default AllMovies