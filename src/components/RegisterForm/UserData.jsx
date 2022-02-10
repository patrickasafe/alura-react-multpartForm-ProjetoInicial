import { TextField, Button } from "@material-ui/core";
import React, { useState, useContext } from "react";
import RegisterValidations from "../../contexts/RegisterValidations";
import useErrors from "../../hooks/useErrors";

const UserData = ({ whenSending }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checks = useContext(RegisterValidations)

  const [errors, checkFields, possibleSubmit] = useErrors(checks)

 
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        possibleSubmit() && whenSending({ email, password });
      }}
      
    >
      <TextField
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        id="email"
        label="email"
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        onBlur={checkFields}
        name="password"
        id="senha"
        label="senha"
        type="password"
        required
        variant="outlined"
        margin="normal"
        fullWidth
        error={!errors.password.valid}
        helperText={errors.password.text}
      />
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form >
  );
};

export default UserData;
