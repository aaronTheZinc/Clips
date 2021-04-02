import React, { useContext, useState } from "react";
import { Button } from "../MicroComponents/buttons";
import CustomInput from "../MicroComponents/input";
import { Label, Input } from "@rebass/forms";
import { appState } from "../../State/Context";
import Cookie from "../../State/cookies";
import "./index.css";
export default ({setAuth}) => {
  const [email, setEmail] = useState("aaronmarsh755@gmail.com");
  const [password, setPassword] = useState("Buddy2004");
  const {
    action: {login}
  } = useContext(appState);

  return (
    <div className="form">
      <h1 style={{ color: "white" }}>Clips</h1>
      <section style={{ color: "white", marginTop: "20px" }}>
        <CustomInput
          labelText="Email"
          id="email"
          formControlProps={{
            fullWidth: true,
          }}
          handleChange={(e) => setEmail(e.target.value)}
          type="text"
        />
      </section>
      <section style={{ marginTop: "10%" }}>
        <CustomInput
          labelText="Password"
          id="password"
          formControlProps={{
            fullWidth: true,
          }}
          handleChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </section>
      <section style={{ marginTop: "10%" }}>
        <Button
          title="Login"
          action={async () => {
            const currentUserId = await login({
              email: email,
              password: password,
            });
            setAuth({state: true, uid: currentUserId})
            window.open('/hub', '_self')
          
          }}
        />
      </section>
    </div>
  );
};
