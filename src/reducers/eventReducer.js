import { UPDATE_POTLUCK, ADD_POTLUCK, DELETE_POTLUCK } from "../actions/eventActions";

export const initialState = {
   potluck: {
         "potluck_id": 1,
         "potluck_name": "Thanksgiving",
         "date": "2021-11-20T00:00:00.000Z",
         "time": "13:00:00",
         "location": "U.S.A",
         "user_id": 1
            }
}

export const eventReducer = (state = initialState, action) =>{
   switch(action.type){
      default:
         return state;
   }
} 