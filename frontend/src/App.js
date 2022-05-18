import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import {Routes, Link, Route, BrowserRouter} from 'react-router-dom'
import AllMovies from './Components/AllMovies';
import Home from './Components/Home';
import Auth from './Components/Auth';
import MovieDetail from './Components/MovieDetail';

import useGetCookies from "./Hooks/useGetCookie";
import useLogin from "./Hooks/useLogin";
import useRegister from "./Hooks/useRegister";


function App() {

  const [loggedUser, setLoggedUser] = useState({
    status: 'error',
    token: "",
    username: ""
  })
  const [localUser, setLocalUser] = useState({password: "", username: ""})
  const [needsLogin, setNeedsLogin] = useState(true)

  console.log(localUser)

  const login = useLogin();
    const register = useRegister();
    const cookies = useGetCookies();
    // const eraseCookie = useEraseCookie();

    useEffect(() => {
        if (Object.keys(cookies).includes('hetic_token') && Object.keys(cookies).includes('hetic_username')) {
            console.log('got cookies !', loggedUser)
            setLoggedUser(prev => ({
                ...prev,
                username: cookies.hetic_username,
                token: cookies.hetic_token
            }))
        }
    }, [])

    useEffect(() => {
        if (needsLogin && localUser.username !== '') {
            console.log('login ?')
            login(localUser.username, localUser.password)
                .then(data => setLoggedUser(data))
        } else if (!needsLogin && localUser.username !== '') {
            console.log('register ?', localUser.username)
            register(localUser.username, localUser.password)
                .then(data => setLoggedUser(data))
        }
    }, [localUser])

  return (
    <BrowserRouter>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <Link className='navbar-brand' to="/">IMDbis</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link className='nav-link' to="/allMovies">Tous les films</Link>
              <Link className='nav-link' to="/auth" >Se connecter / s'inscrire</Link>
            </div>
          </div>
        </div>
      </nav>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/allMovies" element={<AllMovies />} />
          <Route path="/auth" element={<Auth setLocalUser={setLocalUser} needsLogin={needsLogin} setNeedsLogin={setNeedsLogin}  />} />
          <Route path="/movieDetail" element={<MovieDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// TODO -> faire un header alternatif connecté qui retire le bouton connexion / inscription et qui contient un bouton déconnection + un bonjour $user