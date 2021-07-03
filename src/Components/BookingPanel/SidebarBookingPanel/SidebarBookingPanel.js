import React from 'react';
import brand from '../../../images/logo.png';
import { Card } from 'react-bootstrap';
import { faCommentAlt, faListAlt, faShoppingCart,} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


export default function Sidebar() {
    //css
    const brandImg = { width:"7rem"}
    const linkUnderline= {textDecoration: "none", color:"inherit"};
    const sidebar = {backgroundColor:"#fff", border:"none", lineHeight:"1.2rem"}
    const text = { padding:".3rem .1rem", fontWeight:"500", color:"#4f4f4f"}
    const FontAws = { color:"#4f4f4f", fontSize:".8rem"}

    return (
        <div>
            <Card style={sidebar}>
                <Card.Body>
                    <Card.Title><img src={brand} style={brandImg} alt=""/></Card.Title>
                    <Link to="/bookingMain" style={linkUnderline}><Card.Text style={text}><FontAwesomeIcon style={FontAws} icon={faShoppingCart}/>&nbsp; Book</Card.Text></Link>
                    <Link to="/bookingList" style={linkUnderline}><Card.Text style={text}><FontAwesomeIcon style={FontAws} icon={faListAlt}/>&nbsp; Booking List</Card.Text></Link>
                    <Link to="/addReview" style={linkUnderline}><Card.Text style={text}><FontAwesomeIcon style={FontAws} icon={faCommentAlt}/>&nbsp; Give a Review</Card.Text></Link>
                </Card.Body>
            </Card> 
        </div>
    );
};