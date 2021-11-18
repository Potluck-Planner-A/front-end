import axiosWithAuth from './../utils/axiosWithAuth';


   // axiosWithAuth()
   //       .get('https://buildweekpotlucklambda.herokuapp.com/api/potlucks')
   //       .then(res => {
   //          console.log(res)
   //          // dispatch(addPotluck(response.data.results))
   //       })
   //       .catch(err => {
   //          // dispatch(fetchFail(err))
   //       })

export const addEvent = newEvent => {
   return (dispatch) => {
      axiosWithAuth()
         .post('https://buildweekpotlucklambda.herokuapp.com/api/potlucks', newEvent)
         .then(res => {
            console.log(res)
            dispatch(addPotluck(res.data))
         })
         .catch(err => {
            dispatch(fetchFail(err))
         })
   }
}





export const UPDATE_POTLUCK = 'UPDATE_POTLUCK';
export const updatePotluck = (potluckUpdates) =>{
   return ({ type: UPDATE_POTLUCK, payload: potluckUpdates})
}

export const ADD_POTLUCK = 'ADD_POTLUCK';
export const addPotluck = (newPotluck) =>{
   return ({ type: ADD_POTLUCK , payload: newPotluck})
}

export const DELETE_POTLUCK = 'DELETE_POTLUCK';
export const deletePotluck = () =>{
   return ({ type: DELETE_POTLUCK })
}

// export const FETCH_START = 'FETCH_START';
// export const fetchStart = () =>{
//    return ({ type: FETCH_START})
// }

// export const FETCH_SUCCESS = 'FETCH_SUCCESS';
// export const fetchSuccess = (fetchResp) =>{
//    return ({ type: FETCH_SUCCESS, payload: fetchResp})
// }

export const FETCH_FAIL = 'FETCH_FAIL';
export const fetchFail = (errorMessage) =>{
   return ({ type: FETCH_FAIL, payload: errorMessage})
}
