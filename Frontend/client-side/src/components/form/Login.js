import './Form.css'
import React, { useState } from 'react';

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }
    return ( 
        <section className="card">

            <div className="auth-form-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">email</label>
                     <input value={email} type="email" placeholder="youremail@gmail.com" id="email" name="email"></input>

                    <lable htmlFor="password">password</lable>
                     <input value={password} type="password" placeholder="********" id="password" name="password"></input>

                    <button type="submit">Log In</button>
                 </form>
            </div>

            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account ? Register</button>

        </section>
     );
}

export default Login;