import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }
    return ( 
        <section>

            <div>
                <form onSubmit={handleSubmit}>
                    <label for="email">email</label>
                     <input value={email} type="email" placeholder="youremail@gmail.com" id="email" name="email"></input>

                    <lable for="password">password</lable>
                     <input value={password} type="password" placeholder="********" id="password" name="password"></input>

                    <button type="submit">Log In</button>
                 </form>
            </div>
            
            <button>Don't have an account ? Register</button>

        </section>
     );
}

export default Login;