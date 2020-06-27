import React from 'react';
import './App.css';
import { Switch,Route} from 'react-router-dom';
import Home from './Main/Home';
import Games from './Main/Games';
import Accessories from './Main/Accessories';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" render={() => (<div><Home/></div>)}/>
      <Route exact path="/games" render={() => (<div><Games/></div>)}/>
      <Route exact path="/accessories" render={() => (<div><Accessories/></div>)}/>

      </Switch>
      
    </div>
  );
}

export default App;
