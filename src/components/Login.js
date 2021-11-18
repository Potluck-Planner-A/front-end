import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { connect } from 'react-redux';
import { userLogin } from './../actions/userActions'


const initialState = {
    username: "",
    password: "",
};

const Login = (props) => {
    // console.log(props)
  const [ credentials, setCredentials ] = useState(initialState);

  const { push } = useHistory();

  const handleChange = (event) => {
    setCredentials({
        ...credentials,
        [event.target.name]: event.target.value,
    });
  };

    const handleLogin = (event) => {
        event.preventDefault();
        
        props.userLogin(credentials)
        console.log(credentials)
        push('/newevent');
        //lets push this to the /events page when that is set up
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
                            value={credentials.username}
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
                            value={credentials.password}
                            onChange={handleChange}
                            fullWidth
                        />

                        <Button variant='contained' type='submit' style={buttonStyle} fullWidth>Sign In</Button>

                        <Typography style={headerStyle}> Don't have an account?
                            <Link onClick={handleSignUpClick} style={linkStyle} href='#' >
                                Sign Up
                            </Link>
                        </Typography>

                    </form>
                </div>

            </Paper>
        </Grid>
    );
}

const mapStateToProps = (state) =>{
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps, { userLogin })(Login);
