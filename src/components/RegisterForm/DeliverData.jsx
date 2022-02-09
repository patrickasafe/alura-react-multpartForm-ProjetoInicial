import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'

const DeliverData = ({aoEnviar}) => {
  const [zipCode, setZipCode] = useState("")
  const [adress, setAdress] = useState("")
  const [number, setNumber] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")



  return(
    <form onSubmit={
      (event) => {
        event.preventDefault();
        aoEnviar({zipCode, adress, number, state, city})
      }
    }>
      <TextField 
        value={zipCode}
        onChange={(e) => {
          setZipCode(e.target.value)
        }}
        id="cep" 
        label="CEP" 
        type="number" 
        variant="outlined"
        margin="normal"
        fullWidth 
      />
      <TextField 
        value={adress}
        onChange={(e) => {
          setAdress(e.target.value)
        }}
        id="endereço" 
        label="Endereço" 
        type="text" 
        variant="outlined"
        margin="normal"
        fullWidth 
      />
      <TextField 
        value={number}
        onChange={(e) => {
          setNumber(e.target.value)
        }}
        id="numero" 
        label="Número" 
        type="number" 
        variant="outlined"
        margin="normal"
        fullWidth 
      />
      <TextField 
        value={state}
        onChange={(e) => {
          setState(e.target.value)
        }}
        id="estado" 
        label="Estado" 
        type="number" 
        variant="outlined"
        margin="normal"
        fullWidth 
      />
      <TextField 
        value={city}
        onChange={(e) => {
          setCity(e.target.value)
        }}
        id="cidade" 
        label="Cidade" 
        type="number" 
        variant="outlined"
        margin="normal"
        fullWidth 
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
      
    </form>
  )
}

export default DeliverData;