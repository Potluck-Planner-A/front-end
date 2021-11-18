import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { getUsers } from '../actions/userActions';

const UserHome = (props) => {
   console.log(props)
   const { getUsers } = props

   const [state, setState]= useState({username: ''})

   
   useEffect(() => {
      getUsers()
      // setState({username: state.user})
   }, [])

   return (
      <div>
         {state.username}
      </div>
   )
}

const mapStateToProps = (state) =>{
   return {
      user: state.userReducer.user
   }
}

export default connect(mapStateToProps, { getUsers })(UserHome);