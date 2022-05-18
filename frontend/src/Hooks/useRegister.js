import axios from "axios";

export default function useRegister() {
    return (username, password) => {
        return axios({
            url: 'http://localhost:2345/register.php',
            method: 'post',
            withCredentials: true,
            data: new URLSearchParams({
                username: username,
                password: password
            })
        })
            .then(res => res.data)
            .then(console.log("mon travail ici est terminé"))
    }
}
