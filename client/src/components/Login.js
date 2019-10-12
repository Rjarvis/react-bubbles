import React from "react";

const Login = () => {

  
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <div class="container">
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required/>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required/>

        <button type="submit">Login</button>
        <label>
        <input type="checkbox" checked="checked" name="remember"> Remember me</input>
        </label>
      </div>
      <p>Build a login page here</p>
    </>
  );
};

export default Login;
