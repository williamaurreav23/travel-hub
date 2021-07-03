import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router,Switch, Route,} from "react-router-dom";

import AppBar from './Components/Shared/AppBar/AppBar';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import NoMatch from './Components/NoMatch/NoMatch';
// home components
import Login from './Components/Login/Login';
import Home from './Components/Home/Home/Home';
import Destinations from './Components/Home/Destinations/Destinations';
// booking components
import BookingPayment from './Components/BookingPanel/Booking/ProcessPayment/BookingPayment';
import BookingList from './Components/BookingPanel/BookingList/BookingList';
import AddReview from './Components/BookingPanel/AddReview/AddReview';
// admin components
import OrderList from './Components/AdminPanel/OrderList/OrderList';
import AddDestinations from './Components/AdminPanel/AddDestinations/AddDestinations';
import ManageDestinations from './Components/AdminPanel/ManageDestinations/ManageDestinations';
import MakeAdmin from './Components/AdminPanel/MakeAdmin/MakeAdmin';
import Booking from './Components/BookingPanel/Booking/Booking';
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

                    {/* booking components */}
                    <PrivateRoute path="/booking/:id"><Booking/></PrivateRoute>
                    <PrivateRoute path="/bookingMain"><Booking/></PrivateRoute>
                    <PrivateRoute path="/bookingPayment"><BookingPayment/></PrivateRoute>
                    <PrivateRoute path='/bookingList'><BookingList/></PrivateRoute>
                    <PrivateRoute path='/addReview'><AddReview/></PrivateRoute>

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
