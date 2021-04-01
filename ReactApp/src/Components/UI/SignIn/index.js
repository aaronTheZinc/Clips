import React, { useEffect, useContext, useState } from "react";
import GoogleLogin from "react-google-login";
import {appState} from '../../State/Context'
import axios from "axios";
import './index.css'
export default () => {
  const {
   action: {
       login
   }
  } = useContext(appState);

  useEffect(async () => {

  }, []);

  return (
    <div style={{height: '100vh', width: '100vw', backgroundClip: 'black'}}>
      <GoogleLogin
        clientId="38161657877-hkgk1j3cgk325jvn7hgc22hoetv4adrq.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={(res)=>console.log(res)}
        onFailure={(res)=>console.log(res)}
        cookiePolicy={"single_host_origin"}
      />
      ,
    </div>
  );
};
