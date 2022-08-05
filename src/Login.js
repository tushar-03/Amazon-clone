import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import './login.css'
import { auth } from './firebase.js';

function Login() {
    const history = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signin = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history('/')
            })

            .catch(error => alert(error.message))


    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login bg-light'>
            <Link to="/">
                <img className='login_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png' />
            </Link>

            <div className='login_container'>
                <h1>Sign in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={
                        e => setEmail(e.target.value)
                    } />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={
                        e => setPassword(e.target.value)
                    } />
                    <button onClick={signin} type='submit' className='login_signinbutton'>Sign-In</button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.

                </p>
                <button onClick={register} className='login_registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
