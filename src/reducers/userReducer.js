//! this component is for the userLogin ...
//need imports from actions
import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from "../actions/userActions"

export const initialState = {
   user: {
      //we may have to do this in a different reducer 
      //?? this reducer might remain reserved for the users? 
      //todo: honestly i dont see a reason for getUserss
      // name: '',
      username: '',
      password: '',
      email: '',
      token: ''
   },
   isFetching: false, // this is for the userPage loading
   error: '',  //this error is if login fails ?

}

export const userReducer = (state = initialState, action) => {
   switch(action.type) {
      case FETCH_START:
         console.log('fetch is happening')
         return {
            ...state,
            user: [{}],
            isFetching: true,
            error: ''
         }
      case FETCH_SUCCESS:
         console.log('fetch is happening')
         return {
            ...state,
            user: action.payload,
            isFetching: false,
            error: ''
         }
      case FETCH_FAIL:
         console.log('fetch is happening')
         return {
            ...state,
            user: [{}],
            isFetching: false,
            error: action.payload
         }
      default:
         return state;
   }
}