import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


const initialState = {
  credentials: {
    username: "",
    password: "",
  },
};

const Login = () => {
  const [state, setState] = useState(initialState);
  const [error, setError] = useState("");

  const { push } = useHistory();

  const handleChange = (event) => {
    setState({
      credentials: {
        ...state.credentials,
        [event.target.name]: event.target.value,
      },
    });
  };

    const handleLogin = event => {
        event.preventDefault();
        axios.post('http://localhost:5000/api/login', state.credentials)
            .then(response => {
                localStorage.setItem('token', response.data.token);
                push('/view');
            })
            .catch(error => {
                setError(error.response.data.error)
            })
    }

    const handleSignUpClick = event => {
        event.preventDefault();
        push('/register')
    }

    const paperStyle = {padding: 20, height: '70vh', width: 280, margin: '6rem auto'}
    const avatarStyle = {backgroundColor:'#626262', width: '4rem', height: '4rem'}
    const buttonStyle = {margin: '0.8rem 0', backgroundColor: '#a9a9ff', fontFamily: 'Outfit, sans-serif'}
    const textboxStyle = {margin: '0.8rem 0'}
    const headerStyle = {fontFamily: 'Outfit, sans-serif'}
    const linkStyle = {fontFamily: 'Outfit, sans-serif', margin: '0 0.4rem'}
    const iconStyle = {fontSize: '3rem'}

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>

                <Grid align='center'>
                    <Avatar style={avatarStyle}> <LockOutlinedIcon style={iconStyle}/> </Avatar>
                    <h1 style={headerStyle}>Sign In</h1>
                </Grid>
                
                
                <div className='login-form'>
                    <form onSubmit={handleLogin}>

                        <TextField
                            style={textboxStyle}
                            label='username'
                            variant='outlined'
                            type='text'
                            placeholder='enter username'
                            name='username'
                            value={state.credentials.username}
                            onChange={handleChange}
                            fullWidth
                        />

                        <TextField
                            style={textboxStyle}
                            label='password'
                            variant='outlined'
                            type='password' 
                            placeholder='enter password'
                            name='password'
                            value={state.credentials.password}
                            onChange={handleChange}
                            fullWidth
                        />

                        <Button color='#626262' variant='contained' style={buttonStyle} fullWidth>Sign In</Button>

                        <Typography> Don't have an account?
                            <Link onClick={handleSignUpClick} style={linkStyle} href='#' >
                                Sign Up
                            </Link>
                        </Typography>

                        {error && <p id='error'>{error}</p>}

                    </form>
                </div>

            </Paper>
        </Grid>
    );
}

export default Login;
