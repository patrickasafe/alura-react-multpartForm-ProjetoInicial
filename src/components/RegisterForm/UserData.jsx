import { TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';

const UserData= ({ whenSending}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  return(
    <form onSubmit={(event) => {
      event.preventDefault();
      whenSending({email, password})
    }}>
      <TextField 
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
        id="email" 
        label="email" 
        type="email" 
        required
        variant="outlined"
        margin="normal"
        fullWidth 
      />
      <TextField 
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
        }}
        id="senha" 
        label="senha" 
        type="password"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary" >
        Próximo
      </Button>
    </form>
  )

}

export default UserData;