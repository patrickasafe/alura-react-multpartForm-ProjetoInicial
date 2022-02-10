import React, { useState } from "react";

function useErrors(checks) {
  const initialState = createInitialState(checks);
  const [errors, setErrors] = useState(initialState);

  const checkFields = (event) => {
    const { name, value } = event.target;
    const newState = { ...errors };
    newState[name] = checks[name](value);
    setErrors(newState);
  };

  const possibleSubmit = () => {
    for (let field in errors) {
      if (!errors[field].valid) {
        return false;
      }
    }
    return true;
  };


  return [errors, checkFields, possibleSubmit];
}

function createInitialState(checks) {
  const initialState = {};
  for (let property in checks) {
    initialState[property] = { valid: true, text: "" };
  }
  return initialState;
}

export default useErrors;

