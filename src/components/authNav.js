import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const AuthNav = () => {
    const { isAuthenticated } = useAuth0();
    console.log(isAuthenticated);

    return isAuthenticated ? <p>yes</p> : <p>no</p>;
}

export default AuthNav;