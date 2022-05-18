import axios from "axios";

export default function useGetMovieDetails() {
    return () => {
        return axios.get('http://localhost:2345/getMovieDetails.php')
            .then(res => res.data)
    }
}