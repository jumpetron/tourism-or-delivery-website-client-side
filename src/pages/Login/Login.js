import React from 'react';
import useAuth from '../../Hooks/useAuth';
import './Login.css'
import { FcGoogle } from "react-icons/fc";
import { useHistory, useLocation } from 'react-router';

const Login = () => {

    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home";

    const handleGoogleLogin = () => {
      signInUsingGoogle().then((result) => {
        history.push(redirect_uri);
      });
    };

    return (
      <div className="login-container my-5">
        <button className="border-0 p-3" onClick={handleGoogleLogin}>
          <b>Sing with google</b>{" "}
          <FcGoogle className="fs-2 google-btn" onClick={signInUsingGoogle} />
        </button>
      </div>
    );
};

export default Login;