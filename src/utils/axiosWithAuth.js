import axios from 'axios';

const axiosWithAuth = ()=> {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: 'http://buildweekpotlucklambda.herokuapp.com/api'
    });
}

export default axiosWithAuth;