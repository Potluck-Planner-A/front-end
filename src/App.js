import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home'
import NewEvent from './components/NewEvent'
import { Switch, Route } from "react-router-dom";
// import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <>
    <div className="App">
      <Header/>

    <Switch>
      <Route path='/' component={Home}/>
      <Route path='/newevent' component={NewEvent}/>
    </Switch>
    </div>
    

      <p> 
        hello world
      </p>

    </>
  );
}

export default App;
