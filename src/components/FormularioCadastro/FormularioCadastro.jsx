import React, { useState } from "react";
import DadosUsuario from "./DadosUsuario";
import DadosPessoais from "./DadosPessoais";
import DadosEntrega from "./DadosEntrega"

const FormularioCadastro = ({aoEnviar, validarCPF}) => {
  const [etapaAtual, setEtapaAtual] = useState(0);

  const proximo = () => {
    setEtapaAtual(etapaAtual+1)
  }

  const formularios = [
  <DadosUsuario aoEnviar={proximo} />,
  <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF} />,
  <DadosEntrega aoEnviar={aoEnviar} />,
  ];

 

  
  return <>{formularios[etapaAtual]}</>
}

export default FormularioCadastro;
