import React, { useState } from 'react';
import { Grid, Paper, Avatar, TextField } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

const initialState = {
    username: '',
    password: '',
}

const Register = () => {

    const [state, setState] = useState(initialState)

    const handleChanges = event => {
        setState({
            ...state, 
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
    }

    const paperStyle = {padding: 20, height: '70vh', width: 280, margin: '5rem auto'}
    const avatarStyle = {backgroundColor:'#626262'}

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle} fontSize='large'> <PersonIcon/> </Avatar>
                </Grid>

                <form onSubmit={handleSubmit}>

                    <TextField
                        label='email'
                        type='text'
                        placeholder='Enter email'
                        name='email'
                        // value={}
                        onChange={handleChanges}
                        fullWidth
                    />

                    <TextField
                        label=''
                        type=''
                        placeholder=''
                        name=''
                        // value={}
                        onChange={handleChanges}
                        fullWidth
                    />

                    <TextField
                        label=''
                        type=''
                        placeholder=''
                        name=''
                        // value={}
                        onChange={handleChanges}
                        fullWidth
                    />

                    <TextField
                        label=''
                        type=''
                        placeholder=''
                        name=''
                        // value={}
                        onChange={handleChanges}
                        fullWidth
                    />

                </form>
            </Paper>
        </Grid>
    )
}

export default Register