import React, {useState } from "react";
import Register from "./Register";
import Login from "./Login";

function Form() {
    const [currentForm, setCurrentForm] = useState('register');

    return ( 
<>
        {
             currentForm === "register" ? <Register /> : <Login />
        } 
</>
     );
}

export default Form;