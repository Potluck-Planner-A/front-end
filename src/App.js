import { Switch, Route } from "react-router-dom";
<<<<<<< HEAD
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import NewEvent from './components/NewEvent';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import EventList from './components/EventList';
=======
import "./App.css";
>>>>>>> 300d9f27a5e8cdb79a97047c3aae367dfd1dd2b5

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
        <Header />
        <Switch>
<<<<<<< HEAD
          <Route path='/newevent' component={NewEvent}/>
          <Route path='/register' component={Register}/>
          <Route path='/login' component={Login}/>
          <Route exact path='/logout' component={Logout}/>
          {/* <Route path='/' component={Home}/> */}
          <Route path='/' component={EventList} />
=======
          <Route path='/newevent' component={NewEvent} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route exact path='/logout' component={Logout} />
          <Route path='/' component={Home} />
>>>>>>> 300d9f27a5e8cdb79a97047c3aae367dfd1dd2b5
        </Switch>
      </div>

      {/* <p>hello world</p> */}
    </>
  );
}

export default App;
