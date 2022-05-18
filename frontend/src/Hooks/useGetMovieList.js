
import axios from "axios";

export default function useGetMovieList() {
    return () => {
        return axios.get('http://localhost:2345/getAllMovies.php')
            .then(res => res.data)
    }
}
