import React, { useState } from 'react';
import LogoutButton from "./login/logoutButton";
import AuthNav from "./authNav";


export default function NavBar(props) {
    return (
        <div>
            {props.loginStatus === false ? (
                <div>
                    not logged in navbar
                    <button onClick={() => props.changeLoginStatus()}>fakeLogin</button>
                </div>
            ): (
                <div>
                    logged in navbar
                    <LogoutButton changeLoginStatus={props.changeLoginStatus}/>
                    <button onClick={() => props.changeLoginStatus()}>fakeLogout</button>
                </div>
            )}
            <AuthNav />
        </div>
    )
}
