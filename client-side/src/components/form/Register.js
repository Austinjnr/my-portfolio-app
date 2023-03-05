import './Form.css'
import React, { useState } from "react";

function Register(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(email)
      }

    return (
        <section className="card">
              
              <div className="auth-form-container">
                  <h2>Create an Account</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <lable  className='label' htmlFor="name">Full Name</lable>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="full Name" id="name"></input>

                    <label className='label' htmlFor="email">Email</label>
                     <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"></input>

                    <lable className='label' htmlFor="password">Password</lable>
                     <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password"></input>

                    <button type="submit">Log In</button>

                    <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an existing account ? Sign In here</button>
                 </form>
            </div>
            
            
        </section>
      );
}

export default Register;