
function login() {
    return ( 
        <form>
            <label for="email">email</label>
            <input type="email" placeholder="youremail@gmail.com" id="email" name="email"></input>
            
            <lable for="password">password</lable>
            <input type="password" placeholder="****" id="password" name="password"></input>

            <button>Log In</button>
        </form>
     );
}

export default login;