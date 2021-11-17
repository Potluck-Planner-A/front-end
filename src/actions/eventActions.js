

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