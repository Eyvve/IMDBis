import {AxiosInstance} from "../Axios/AxiosInstance";

export default function usePostComment() {
    return (token, comment) => {
        return AxiosInstance({
            url: '/postComment.php',
            method: 'post',
            data: new URLSearchParams({
                username: comment.username,
                content: comment.content,
                movieId: comment.movieId
            })
        })
            .then(res => res.data)
    }
}