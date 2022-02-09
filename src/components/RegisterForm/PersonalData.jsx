import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function PersonalData({aoEnviar, validarCPF}) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ssn, setSsn] = useState("");
  const [sales, setSales] = useState(true);
  const [news, setNews] = useState(false);
  const [errors, setErrors] = useState({cpf:{valido:true, texto:""}})
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({name, lastName, ssn, news, sales});
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
          setSsn(event.target.value);
        }}

        onBlur={(event)=>{
          const ehValido = validarCPF(ssn);
          setErrors({ssn:ehValido})
        }}
        error={!errors.ssn.valido}
        helperText={errors.ssn.texto}
        id="CPF"
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
