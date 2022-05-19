import React from 'react'
import { useEffect, useState } from 'react';
import useGetMovieComments from '../Hooks/useGetMovieComments';
import CommentForm from './CommentForm';

function MovieComments({movie, loggedUser}) {

    const [comments, setComments] = useState([]);
    const [needsCommentUpdate, setNeedsCommentUpdate] = useState(false);
    const [currentMovieId, setCurrentMovieId] = useState(movie.id);

    console.log(currentMovieId)

    
    console.log(comments)

    const getMovieComments = useGetMovieComments();

    useEffect(() => {
        getMovieComments(movie.id)
        .then(data => {
            setComments(data)
            setNeedsCommentUpdate(false)
        });
    }, [needsCommentUpdate]);

  return (
      <>
            <br></br>
            <div className='d-flex p-2 gap-3'>
                <h4 className='mt-2'>Commentaires pour <strong>{movie.title}</strong></h4>
            </div>
            {comments?.map((comment, index) => (
                <div key={index} className='card text-white bg-dark mb-3 p-2 '>
                    <strong className='card-title'>{comment.username}</strong>
                    <p className='card-text'>{comment.content}</p>
                </div>
            ))}
            <CommentForm loggedUser={loggedUser} setNeedsCommentUpdate={setNeedsCommentUpdate} currentMovieId={currentMovieId} />
        </> 
  )
}

export default MovieComments