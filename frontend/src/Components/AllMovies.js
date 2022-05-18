import React from 'react'
import { useEffect, useState } from 'react';
import useGetMovieList from '../Hooks/useGetMovieList';
import Movies from './Movies'
import './movieStyle.css'

function AllMovies() {

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
    <div><Movies movielist={movielist} /></div>
  )
}

export default AllMovies