import React, { useState } from 'react';
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

import { connect } from 'react-redux';
import { registerNewUser } from './../actions/userActions'

const initialState = {
    username: '',
    password: '',
    email:''
}

const Register = (props) => {
    console.log(props)

    const [state, setState] = useState(initialState)

    const handleChanges = event => {
        setState({
            ...state, 
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.registerNewUser(state)
    }

    const paperStyle = {padding: 20, height: '70vh', width: 280, margin: '6rem auto'}
    const avatarStyle = {backgroundColor:'#626262', width: '4rem', height: '4rem'}
    const textboxStyle = {margin: '0.7rem 0'}
    const headerStyle = {margin: '2rem 0', fontFamily: 'Outfit, sans-serif'}
    const iconStyle = {fontSize: '3rem'}
    const buttonStyle = {backgroundColor: '#a9a9ff', fontFamily: 'Outfit, sans-serif', margin: '0.8rem 0'}

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}> <PersonIcon style={iconStyle}/> </Avatar>
                    <h2 style={headerStyle}>Create an Account!</h2>
                </Grid>

                <form onSubmit={handleSubmit}>

                    <TextField
                        style={textboxStyle}
                        label='username'
                        type='text'
                        placeholder='Enter Username'
                        name='username'
                        value={state.username}
                        onChange={handleChanges}
                        fullWidth
                    />

                    <TextField
                        style={textboxStyle}
                        label='password'
                        type='password'
                        placeholder='Enter Password'
                        name='password'
                        value={state.password}
                        onChange={handleChanges}
                        fullWidth
                    />

                    <TextField
                        style={textboxStyle}
                        label='email (optional)'
                        type='email'
                        placeholder='Enter Email'
                        name='email'
                        value={state.email}
                        onChange={handleChanges}
                        fullWidth
                    />

                    <Button style={buttonStyle} variant='contained' fullWidth>Sign Up</Button>

                </form>
            </Paper>
        </Grid>
    )
}

const mapStateToProps = (state)=> {
    return{
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps, {registerNewUser})(Register)