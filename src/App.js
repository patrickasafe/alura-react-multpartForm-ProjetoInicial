import React, { Component } from "react";

import "./App.css";
import "fontsource-roboto";

import { Container, Typography } from "@material-ui/core";

import { checkPassword, checkSSN } from "./models/register";

import RegisterForm from "./components/RegisterForm/RegisterForm";
import RegisterValidations from "./contexts/RegisterValidations";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de cadastro
        </Typography>
        <RegisterValidations.Provider
          value={{ ssn: checkSSN, password: checkPassword }}
        >
          <RegisterForm whenSending={whenSendingForm} />
        </RegisterValidations.Provider>
      </Container>
    );
  }
}

function whenSendingForm(data) {
  console.log(data);
}

export default App;
