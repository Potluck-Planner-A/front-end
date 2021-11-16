import { Switch, Route } from "react-router-dom";
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import NewEvent from './components/NewEvent';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import EventList from './components/EventList';


function App() {
  return (
    <>
      <div className="App">
        <Header/>

        <Switch>
          <Route path='/newevent' component={NewEvent}/>
          <Route path='/register' component={Register}/>
          <Route path='/login' component={Login}/>
          <Route exact path='/logout' component={Logout}/>
          {/* <Route path='/' component={Home}/> */}
          <Route path='/' component={EventList} />
        </Switch>
      </div>
    
      <p> 
        hello world
      </p>

    </>
  );
}

export default App;
