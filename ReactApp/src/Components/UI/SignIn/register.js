import React, { useContext, useState } from "react";
import { Button } from "../MicroComponents/buttons";
import CustomInput from "../MicroComponents/input";
import { Label, Input } from "@rebass/forms";
import { appState } from "../../State/Context";
import "./index.css";
export default () => {
  const {
    action: { register },
  } = useContext(appState);
  const  [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState()
  return (
    <div className="form">
      <h1 style={{color: 'white'}}>Clips</h1>
      <section style={{marginTop: '10%'}}>
        <CustomInput
          labelText="Username"
          id="username"
          formControlProps={{
            fullWidth: true,
          }}
          type="username"
          handleChange={(e)=> setUsername(e.target.value)}
        />
      </section>
      <section style={{color: 'white', marginTop: '20px'}}>
        <CustomInput
          
          labelText="Email"
          id="email"
          formControlProps={{
            fullWidth: true,
          }}
          handleChange={(e)=> setEmail(e.target.value)}
          type="text"
        />
      </section>
      <section style={{marginTop: '10%'}}>
        <CustomInput
          labelText="Password"
          id="password"
          formControlProps={{
            fullWidth: true,
          }}
          handleChange={(e)=> setPassword(e.target.value)}
          type="password"
        />
      </section>
      <section style={{marginTop:'10%'}}>
      <Button title="Register" action={() => register({email:email, password: password, username: username})} />
      </section>
      
    </div>
  );
};
