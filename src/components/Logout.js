import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

const Logout = () => {    
    const { push } = useHistory();

    useEffect(() => {
        axiosWithAuth()
            .post('http://buildweekpotlucklambda.herokuapp.com/api/users//logout')
            .then(response => {
                window.localStorage.removeItem('token');
                push('/login');
            })
    }, [])

    return(<div></div>);
}

export default Logout;