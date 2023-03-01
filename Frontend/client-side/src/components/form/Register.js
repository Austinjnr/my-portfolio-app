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
        <section className="landingpg">
              
              <div className="auth-form-container">
                  <h2>Create an Account</h2>
                <form onSubmit={handleSubmit}>
                    <lable htmlFor="name">Full Name</lable>
                    <input value={name} type="name" placeholder="full Name" id="name"></input>

                    <label htmlFor="email">email</label>
                     <input value={email} type="email" placeholder="youremail@gmail.com" id="email" name="email"></input>

                    <lable htmlFor="password">password</lable>
                     <input value={password} type="password" placeholder="********" id="password" name="password"></input>

                    <button type="submit">Log In</button>
                 </form>
            </div>
            
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an existing account ? Sign In here</button>
        </section>
      );
}

export default Register;