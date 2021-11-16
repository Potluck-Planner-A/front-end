import React from 'react'

//we need to change this from the  Redirect --
// React router v6 is now different https://reactrouter.com/docs/en/v6/upgrading/v5
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({component:Component, ...rest}) => {
  return <Route {...rest} render={(props) => {
    if (localStorage.getItem("token")) {
        return <Component {...props}/>;
    } else {
        return <Redirect to="/login"/>
    }
  }}/>
}

export default PrivateRoute