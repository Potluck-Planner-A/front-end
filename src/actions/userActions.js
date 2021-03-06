//will serve normal, non-token issues
import axios from 'axios';
//will serve protected routes
// import axiosWithAuth from './../utils/axiosWithAuth';

//axios.post -- register new user
export const registerNewUser = (newUser) => {
   return (dispatch) => {
      //  dispatch(fetchStart());
       console.log('FETCHING new user')
       //dispatch({type:FETCH_START})
       axios.post('http://buildweekpotlucklambda.herokuapp.com/api/users/register', newUser)
         .then(res=> {
            console.log(res)
         //   dispatch(fetchSuccess(res.data.results[0]));
           //dispatch({type:FETCH_SUCCESS, payload:res.data.results[0]})
       })
       .catch(err => {
           dispatch(fetchFail(err));
           //dispatch({type:FETCH_ERROR, payload:err})
       });
   }
}

//axios.get = getUsers --- will we need a getUsers //? maybe not rn
export const getUsers = () => {
   return (dispatch) => {
      console.log('GETTING new users')
       dispatch(fetchStart());
       //dispatch({type:FETCH_START})
       axios.get('http://buildweekpotlucklambda.herokuapp.com/api/users')
         .then(res=> {
            console.log(res)
         //   dispatch(fetchSuccess(res.data.results[0]));
           //dispatch({type:FETCH_SUCCESS, payload:res.data.results[0]})
       })
       .catch(err => {
          console.error(err)
         //   dispatch(fetchFail(err));
           //dispatch({type:FETCH_ERROR, payload:err})
       });
   }
}

//axios.put = editUser --- will need for an //?edit user form


//axios.post  -- login
export const userLogin = (payload) =>{
   return (dispatch) => {
      console.log(payload)
      dispatch(fetchStart());
      //dispatch({type:FETCH_START})
      axios.post('https://buildweekpotlucklambda.herokuapp.com/api/users/login', payload)
         .then(res => {
            console.log(res)
           dispatch(fetchSuccess(window.localStorage.setItem('token', res.data.token)));
           //   dispatch(fetchSuccess('this is my user'));
           //dispatch({type:FETCH_SUCCESS, payload:res.data.results[0]})
           dispatch(setMessage(res.data.message))
         })
       .catch(err => {
          console.log( err.response )
           dispatch(fetchFail(err));
           //dispatch({type:FETCH_ERROR, payload:err})
       });
   }
}


export const FETCH_START = 'FETCH_START';
export const fetchStart = () =>{
   return ({ type: FETCH_START})
}

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const fetchSuccess = (fetchResp) =>{
   return ({ type: FETCH_SUCCESS, payload: fetchResp})
}

export const FETCH_FAIL = 'FETCH_FAIL';
export const fetchFail = (errorMessage) =>{
   return ({ type: FETCH_FAIL, payload: errorMessage})
}

export const SET_MESSAGE = 'SET_MESSAGE';
export const setMessage = (message) =>{
   return ({ type: SET_MESSAGE, payload: message})
}