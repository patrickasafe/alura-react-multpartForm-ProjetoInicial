import React, { useState, useEffect } from "react";
import UserData from "./UserData";
import PersonalData from "./PersonalData";
import DeliverData from "./DeliverData";
import { StepLabel, Stepper, Typography, Step } from "@material-ui/core";

const RegisterForm = ({ whenSending }) => {
  const [stage, setStage] = useState(0);
  const [collectedData, setCollectedData] = useState({});
  useEffect(() => {
    stage === forms.length - 1 && whenSending(collectedData);
  });

  const next = () => {
    setStage(stage + 1);
  };

  const CollectData = (data) => {
    setCollectedData({ ...collectedData, ...data });
    next();
  };

  const forms = [
    <UserData whenSending={CollectData} />,
    <PersonalData whenSending={CollectData} />,
    <DeliverData whenSending={CollectData} />,
    <Typography variant="h5">Obrigado pelo Cadastro!</Typography>,
  ];

  return (
    <>
      <Stepper activeStep={stage}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {forms[stage]}
    </>
  );
};

export default RegisterForm;
