import React from 'react'
import { useEffect, useState } from 'react';
import useGetMovieComments from '../Hooks/useGetMovieComments';

function MovieComments({movie}) {

    const [comments, setComments] = useState();

    const getMovieComments = useGetMovieComments();

    useEffect(() => {
        getMovieComments(movie.id)
        .then(data => {
            setComments(data)
        })
    }, []);

    console.log(comments)

  return (
      <>
            {/* <div>Commentaires</div> */}
            <br></br>
            <h4>Commentaires pour <strong>{movie.title}</strong></h4>
            {/* {(comments.map(comment => {
                    <h3>{comment.username}</h3>
            }))} */}
        </> 
  )
}

export default MovieComments