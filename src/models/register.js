const checkSSN = (ssn) => {
  if (ssn.length !== 11) {
    return {valid:false, text:"CPF deve ter 11 dígitos."}
  } else {
    return {valid:true, text:""}
  }
}

const checkPassword = (password) => {
  const passwordMinLength = 6
  const passwordMaxLength = 72
  if (password.length < passwordMinLength || password.length > passwordMaxLength) {
    return {valid:false, text:"Senha deve ter entre 6 e 72"}
  } else {
    return {valid:true, text:""}
  }
}


export { checkSSN, checkPassword }