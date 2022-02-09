import React, { Component } from "react";
import "./App.css";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import "fontsource-roboto";
import { Container, Typography } from "@material-ui/core";
import { checkPassword, checkSSN } from "./models/register";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de cadastro
        </Typography>
        <RegisterForm whenSending={whenSendingForm} checks={{ssn:checkSSN, password:checkPassword}} />
      </Container>
    );
  }
}

function whenSendingForm(data) {
  console.log(data);
}

export default App;
