import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router,Switch, Route,} from "react-router-dom";
import Login from './Components/Login/Login';
import Home from './Components/Home/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import Review from './Components/BookingPanel/Review/Review';
import AppBar from './Components/Shared/AppBar/AppBar';
import Destinations from './Components/Home/Destinations/Destinations';
import Contact from './Components/Home/Contact/Contact';
import BookingPayment from './Components/BookingPanel/Book/BookingPayment';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import BookingList from './Components/BookingPanel/BookingList/BookingList';
import OrderList from './Components/AdminPanel/OrderList/OrderList';
import AddDestinations from './Components/AdminPanel/AddDestinations/AddDestinations';
import ManageDestinations from './Components/AdminPanel/ManageDestinations/ManageDestinations';
import MakeAdmin from './Components/AdminPanel/MakeAdmin/MakeAdmin';
export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
            <AppBar/>
                <Switch>
                    {/* home components */}
                    <Route exact path='/'> <Home/></Route>
                    <Route path='/home'><Home/></Route>
                    <Route path='/login'><Login/></Route>
                    <Route path='/destinations'><Destinations/></Route>
                    <Route path='/contact'><Contact/></Route>

                    {/* booking components */}
                    <Route path="/bookingPayment"><BookingPayment/></Route>
                    <Route path='/bookingPayment/:title/:price'><BookingPayment/></Route>
                    <Route path='/bookingList'><BookingList/></Route>
                    <Route path='/review'><Review/></Route>

                    {/* admin components */}
                    <Route path='/orderList'><OrderList/></Route>
                    <Route path='/addDestinations'><AddDestinations/></Route>
                    <Route path='/manageDestinations'><ManageDestinations/></Route>
                    <Route path='/makeAdmin'><MakeAdmin/></Route>

                    <Route path='*'><NoMatch/></Route>
                </Switch>
            </Router>
          </UserContext.Provider>
    </div>
  );
}

export default App;
