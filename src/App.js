import { Switch, Route } from "react-router-dom";
import "./App.css";

//helper function from utils

import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import NewEvent from "./components/NewEvent";
import Register from "./components/Register";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <div className='App'>
        <Header className='header' />
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <PrivateRoute path='/newevent' component={NewEvent} />
          <Route path='/register' component={Register} />
          <Route exact path='/logout' component={Logout} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </>
  );
}

export default App;
