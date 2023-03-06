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
                <form className="login-form" onSubmit={handleSubmit}>
                    <label className='label' htmlFor="email">Email</label>
                     <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"></input>

                    <lable className='label' htmlFor="password">Password</lable>
                     <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password"></input>

                    <button type="submit">Log In</button>

                    <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account ? Create here.</button>
                 </form>
            </div>


        </section>
     );
}

export default Login;