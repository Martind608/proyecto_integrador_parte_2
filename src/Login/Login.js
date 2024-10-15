import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import './login.css';
const Login = () => {
    /* variables en React - useState = manejar los estados */
    const [email, setEmail] = useState('pepe@gmail.com');
    const navigate = useNavigate();
    const loginUser = () => {

        alert("Login realizado");
        console.log(email);
        navigate('/admin');// Redirecciona a la página principal en react
    }

    return (

        <>

            <h1 class="text-center mt-5">
                Login React
            </h1>

            <div className="container formulario-login">
                <form className="w-75">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control formu" id="email" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control formu" id="password" placeholder="mínimo de 8 caracteres" />
                    </div>

                    <div className="d-flex mt-5 justify-content-around">
                        <button type="reset" className="btn btn-danger w-25 botonEnviar">Borrar</button>
                        <button type="submit" onClick={loginUser} className="btn btn-primary w-25 botonEnviar">Login</button>
                    </div>
                </form>
            </div>


        </>

    );

}


export default Login;