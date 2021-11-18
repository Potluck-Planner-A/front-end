import axios from 'axios';

const axiosWithAuth = ()=> {
    const token = window.localStorage.getItem('token');

    return axios.create({
        headers: {
            Authorization: token
        }
    });
}

export default axiosWithAuth;