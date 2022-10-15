import { Avatar, Button, Container, Grid, Paper, Typography } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { signin, signup } from '../../actions/auth';
import Icon from './icon';
import Input from './Input';
import useStyles from "./styles";

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();

    if(isSignup) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(signin(formData, navigate));
    }
  }

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  }

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: 'AUTH', payload: { result, token }})
      navigate('/');
      
    } catch (error) {
      console.log(error);
    }
  }
  
  const googleFailure = () => {
    console.log("Google Sign In was unsuccessful. Try Again Later");
  }
  
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
            <LockOutlined />
        </Avatar>
        <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                { isSignup && (
                    <>
                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                    </>
                )}
                <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                <Input name="password" label="Password" handleChange={handleChange} handleShowPassword={handleShowPassword} type={showPassword ? "text" : "password"} />
                { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} handleShowPassword={handleShowPassword} type="password" /> }
            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                { isSignup ? 'Sign Up' : 'Sign In' }
            </Button>
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              render={(renderProps) => (
                <Button
                  className={classes.googleButton}
                  color="primary"
                  fullWidth
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  startIcon={<Icon />}
                  variant="contained"
                >Google Sign In</Button>
              )} 
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
            />
            <Grid container justify="flex-end">
                <Grid item>
                    <Button onClick={switchMode}>
                        { isSignup ? 'Already have an account? Sign In' : 'New here? Sign Up'}
                    </Button>
                </Grid>
            </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
