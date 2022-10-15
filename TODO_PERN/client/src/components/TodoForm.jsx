import { Button, Grid, Paper, TextField, Typography, Divider } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React from 'react';

const TodoForm = ({ todo, setTodo, handleSubmit }) => {

  return (
    <Paper elevation={2}>
        <form style={{ padding: "1rem 2rem"}} onSubmit={handleSubmit}>
            <Typography variant='h5' style={{ marginBottom: "1rem" }} align="center">Create Your Todo</Typography>
            <hr />
            <Grid container>
              <Grid item xs>
                <Typography variant='h6' style={{ marginBottom: "1rem" }}>Todo Description</Typography>
                <TextField 
                    autoFocus
                    id="outlined-basic" label="Desecription" variant="outlined" 
                    value={todo.description} onChange={(e) => setTodo({description: e.target.value})} 
                /><br />
                <Button disabled={ !todo.description } sx={{ marginTop: "1rem" }} variant='contained' type='submit' endIcon={<SendIcon />}>Submit</Button>
              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Grid item xs sx={{ paddingLeft: "1rem" }}>
                <Typography variant='h6'>Tips</Typography>
                  <ul>
                    <li>Start typing first to submit the form</li>
                    <li>Give a short description</li>
                    <li>Try to complete as much as you can</li>
                    <li>Your goal should be deleting all todos at the end of the day of the same date</li>
                  </ul>
              </Grid>
            </Grid>
        </form>
    </Paper>
  )
}

export default TodoForm