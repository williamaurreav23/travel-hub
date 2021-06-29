import React, { useContext } from "react";
import logo from "../../../images/logo.png";
import { Navbar,Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AppBar.css';
// firebase imported files
import "firebase/auth";
import firebase from "firebase/app";
import firebaseConfig from "../../Login/firebaseConfig";
import { UserContext } from "../../../App";
if(firebase.apps.length === 0){ firebase.initializeApp(firebaseConfig);}



export default function AppBar () {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const user = firebase.auth().currentUser;

    //css
    const brand = { width:"7rem"};
    const navbar = {position: "fixed",width:"100%", background: "rgba(255,255,255,0.8)", boxShadow: "10px 10px 20px -6px rgba(0,0,0,0.1)", backdropFilter: "blur(12px)"};
    const titleChild = {fontWeight:"500", color:"#262626", margin:".3rem 2rem 0 0",}
    const nav = { marginLeft: 'auto'};
    const linkUnderLine = {textDecoration:"none"}
    const photoUrl = {width:"2rem", borderRadius:"50%", height:"2rem", outline:"0 none", marginLeft:"1rem"};


    return(
        <div className="appbar">
            <Navbar style={navbar} expand="lg" sticky="top">
                <Container>
                    <Link to="/"><Navbar.Brand><img src={logo} style={brand} alt="logo"/></Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto navXl" style={nav}>
                        <Link to="/home" style={linkUnderLine}><Nav.Item style={titleChild} id="Item">HOME</Nav.Item></Link>
                        <Link to="/destinations" style={linkUnderLine}><Nav.Item id="Item" style={titleChild}>DESTINATIONS</Nav.Item></Link>
                        <Link to="/bookingList" style={linkUnderLine}><Nav.Item id="Item" style={titleChild}>BOOKINGS</Nav.Item></Link>
                        <Link to="/orderList" style={linkUnderLine}><Nav.Item id="Item" style={titleChild}>ADMIN</Nav.Item></Link>
                        {user ? <img src={user.photoURL} style={photoUrl} alt="idImage"/> : <Link to="/login" style={linkUnderLine}><Nav.Item id="Item" style={titleChild}>LOGIN</Nav.Item></Link> }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{marginBottom:"5.5%"}}></div>
        </div>
    ) 
}