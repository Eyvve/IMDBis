import React from 'react'
import { useState, useEffect } from 'react';
import HideIfNotLogged from './HideIfNotLogged';
import HideIfLogged from "./HideIfLogged"
import usePostComment from '../Hooks/usePostComment';

function CommentForm({loggedUser, setNeedsCommentUpdate, currentMovieId}) {

    const [localComment, setLocalComment] = useState({content: "", username: loggedUser.username, movieId: currentMovieId});

    const postComment = usePostComment();


    const handleChange = ({target}) => {
        console.log(localComment)
        setLocalComment(prev => ({
            ...prev,
            [target.name]: target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (loggedUser.token != null) {
            postComment(loggedUser.token, localComment)
                .then(data => {
                    console.log(data)
                    setLocalComment({content: "", username: loggedUser.username, movieId: currentMovieId})
                    setNeedsCommentUpdate(true);
                })
        }
    }  

    return (
        <>
            <HideIfLogged  loggedUser={loggedUser}>
                <h6>Veuillez vous connecter pour donner votre avis</h6>
            </HideIfLogged>
            <HideIfNotLogged loggedUser={loggedUser}>
            <form className='mb-5' onSubmit={handleSubmit}>
                <div className="form-group">
                    <textarea 
                        className="form-control" 
                        placeholder='Mon Avis sur ce film' 
                        id="floatingTextarea" 
                        name='content' 
                        onChange={handleChange} 
                        value={localComment.content} 
                        rows="3"
                    ></textarea>

                    <button type='submit' className='btn btn-primary w-100'>
                        soumettre son avis inintéressant
                    </button>
                </div>
            </form>
            </ HideIfNotLogged>
        </>
    )
}

export default CommentForm