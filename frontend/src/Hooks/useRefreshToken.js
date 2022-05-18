import axios from "axios";

export default function useRefreshToken() {
    return () => {
        return axios.get('http://localhost:2345/refresh-token.php', {
            withCredentials: true
        }).then(res => {
            console.log(res.data)
            return res.data
        })
    }
}
