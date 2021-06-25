import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import { createContext } from 'react';
import AppBar from './Components/Shared/AppBar/AppBar';
import Login from './Components/Login/Login';
import NoMatch from './Components/NoMatch/NoMatch';
import Home from './Components/Home/Home/Home';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div>
       <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <AppBar />
          <Switch>
            <Route exact path="/"><Home /></Route>

            <Route path="/home"><Home /></Route>

            <Route path="/login"><Login /></Route>

            <Route path="*"><NoMatch /></Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
