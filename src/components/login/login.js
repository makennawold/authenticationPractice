import React, { useState } from 'react';
import LoginButton from "./loginButton"


export default function Login(props) {
  return (
    <div className='login'>
        <h1>Login</h1>
        <LoginButton changeLoginStatus={props.changeLoginStatus}/>
      </div>
  );
}