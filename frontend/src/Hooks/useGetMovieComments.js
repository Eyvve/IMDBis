import axios from "axios";

export default function useGetMovieComments() {
    return (movieId) => {
        return axios.get('http://localhost:2345/getMovieComments.php',
        {params: {
            movieId: movieId
        }}
        )
            .then(res => res.data)
    }
}
