import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

export default function Auth({setLocalUser, needsLogin, setNeedsLogin}) {
    const [formInput, setFormInput] = useState({password: "", username: ""})

    const navigate = useNavigate();

    const handleChange = ({target}) => {
        setFormInput(prev => ({
            ...prev,
            [target.name]: target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLocalUser(formInput);
        navigate("/")
    }

    return (
        <section className='mx-auto' style={{maxWidth: '350px'}}>
            <form  onSubmit={handleSubmit}>
                <h2 className='mb-3 text-center'>{needsLogin ? 'Connectez-vous' : 'Inscrivez-vous'}</h2>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput"
                        name='username' onChange={handleChange} value={formInput.username}/>
                    <label htmlFor="floatingInput">Username</label>
                </div>
                <div className="mb-3 form-floating">
                    <input type="password" className="form-control" id="floatingPassword"
                        name='password' onChange={handleChange} value={formInput.password}/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button type='submit' className='btn btn-primary w-100'>{needsLogin ? 'Se connecter' : "S'inscrire"}</button>
                
            </form>
            <button className='btn btn-warning mt-3' style={{maxWidth: '350px', width:'350px'}}
                        onClick={() => setNeedsLogin(!needsLogin)}>{needsLogin ? "Je n'ai pas de compte" : "J'ai déjà un compte"}</button>
        </section>
    )
}
