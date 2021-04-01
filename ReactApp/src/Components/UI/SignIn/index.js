import React, { useContext, useState } from "react";
import { Button } from "../MicroComponents/buttons";
import CustomInput from "../MicroComponents/input";
import { Label, Input } from "@rebass/forms";
import "./index.css";
export default () => {
  return (
    <form className="form">
      <h1 style={{color: 'white'}}>Clips</h1>
      <section style={{color: 'white', marginTop: '20px'}}>
        <CustomInput
          
          labelText="Email"
          id="email"
          formControlProps={{
            fullWidth: true,
          }}
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
          type="password"
        />
      </section>
      <section style={{marginTop:'10%'}}>
      <Button title="Login" />
      </section>
      
    </form>
  );
};
