//! this component is for the userLogin ...
//need imports from actions

export const initialState = {
   user: {
      //we may have to do this in a different reducer
      name: '',
      username: '',
      password: '',
      email: ''
   },
   isFetching: false, // this is for the userPage loading
   error: '',  //this error is if login fails ?

}

const userReducer = (state = initialState, action) => {
   switch(action.type) {
      case FETCH_START:
         console.log('fetch is happening')
         return {
            ...state,
            user: [],
            isFetching: true,
            error: ''
         }
      case FETCH_SUCCESS:
         console.log('fetch is happening')
         return {
            ...state,
            user: [],
            isFetching: false,
            error: ''
         }
      case FETCH_FAIL:
         console.log('fetch is happening')
         return {
            ...state,
            user: [],
            isFetching: false,
            error: action.payload
         }
      default:
         return state;
   }
}

export default userReducer
