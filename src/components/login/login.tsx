import React, { FC } from 'react';
import './login.css';
import {AuthContext} from '../../authorContext/userLoginContext';

import { useContext } from 'react';
interface LoginProps {}

const Login: FC<LoginProps> = () => {

  const login=useContext(AuthContext);

  const tryLogin=(e:any)=>{
        e.preventDefault();
        if(e.target.username.value==="cognine" && e.target.password.value==="12345"){
          login.login();
        }
        console.log(login.isLoggedIn)
  }

  return(
    <div className="login" data-testid="Login">
        <form onSubmit={(e)=>tryLogin(e)}>
          <input type="text" name='username' placeholder='Enter UserName'/> <br></br>

          <input type="password" name='password' placeholder='Enter Password' /><br></br>

          <button type='submit'>Login</button>
        </form>

      <h1>{login.isLoggedIn?"Logged in":null}</h1>
  </div>
  )
}

export default Login;
