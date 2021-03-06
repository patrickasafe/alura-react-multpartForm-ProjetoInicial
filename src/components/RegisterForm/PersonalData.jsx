import React, { useState, useContext } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";
import RegisterValidations from "../../contexts/RegisterValidations";
import useErrors from "../../hooks/useErrors";


function PersonalData({ whenSending }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ssn, setSSN] = useState("");
  const [sales, setSales] = useState(true);
  const [news, setNews] = useState(false);

  const checks = useContext(RegisterValidations)
  
  const [errors, checkFields, possibleSubmit] = useErrors(checks)
  

  


  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        possibleSubmit() && whenSending({name, lastName, ssn, news, sales});
      }}
    >
      <TextField
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={lastName}
        onChange={(event) => {
          setLastName(event.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={ssn}
        onChange={(event) => {
          setSSN(event.target.value);
        }}
        onBlur={checkFields}
        error={!errors.ssn.valid}
        helperText={errors.ssn.text}
        id="CPF"
        name="ssn"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={sales}
            onChange={(event) => {
              setSales(event.target.checked);
            }}
            name="promocoes"
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={news}
            onChange={(event) => {
              setNews(event.target.checked);
            }}
            name="novidades"
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default PersonalData;
