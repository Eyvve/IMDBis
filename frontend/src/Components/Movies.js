import React from 'react'

import Movie from "./Movie";

export default function Movies({movielist, setMoviedata}) {

    console.log({movielist})

    return (
        <div className='p-5'>
            <h1 className='text-center mb-5'>Tous les Films</h1>
            <div className='allmovies'>
            {movielist.map((movie) => (
                <Movie movie={movie} key={movie.id} setMoviedata={setMoviedata} />
            ))}
            </div>
        </div>
    )
}