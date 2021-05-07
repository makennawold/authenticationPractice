import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./login/logoutButton";
import GalleryEditor from './galleryEditor';


export default function NavBar(props) {
    const { isAuthenticated } = useAuth0();
    console.log(isAuthenticated);

    const navbarMode = isAuthenticated ? '' : 'Auth';

    return (
        <div className={`navbar${navbarMode}`}>
            <p>title</p>
            <p>link to Gallery Feed</p>
            <p>link to About Me</p>
            {isAuthenticated === true ? (
                <div>
                    logged in navbar
                    <NavLink to="/galleryEditor">Gallery Editor</NavLink>
                    <LogoutButton />                
                </div>
            ): (
                <div>
                    not logged in navbar
                </div>
            )}
        </div>
    )
}


