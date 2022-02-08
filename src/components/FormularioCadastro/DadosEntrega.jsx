import React from 'react'
import { TextField, Button } from '@material-ui/core'

const DadosEntrega = () => {
  return(
    <form>
      <TextField 
        id="cep" 
        label="CEP" 
        type="number" 
        variant="outlined"
        margin="normal"
        fullWidth 
      />
      <TextField 
        id="endereço" 
        label="Endereço" 
        type="text" 
        variant="outlined"
        margin="normal"
        fullWidth 
      />
      <TextField 
        id="numero" 
        label="Número" 
        type="number" 
        variant="outlined"
        margin="normal"
        fullWidth 
      />
      <TextField 
        id="Estado" 
        label="Estado" 
        type="number" 
        variant="outlined"
        margin="normal"
        fullWidth 
      />
      <TextField 
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

export default DadosEntrega;