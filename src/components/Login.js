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

    const paperStyle = {padding: 20, height: '70vh', width: 280, margin: '5rem auto'}
    const avatarStyle = {backgroundColor:'#626262'}
    const buttonStyle = {margin: '0.8rem 0'}
    const textboxStyle = {margin: '0.8rem 0'}

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>

                <Grid align='center'>
                    <Avatar style={avatarStyle}> <LockOutlinedIcon/> </Avatar>
                    <h2>Sign In</h2>
                </Grid>
                
                
                <div className='login-form'>
                    <form onSubmit={handleLogin}>

                        <TextField
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
                            <Link fullWidth href='#' >
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
