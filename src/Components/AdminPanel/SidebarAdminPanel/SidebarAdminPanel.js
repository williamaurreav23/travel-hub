import React from 'react';
import brand from '../../../images/logo.png';
import { Card } from 'react-bootstrap';
import { faList, faPlus, faTasks, faUserShield,} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


export default function SidebarAdminPanel () {
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
                    <Link to="/orderList" style={linkUnderline}><Card.Text style={text}><FontAwesomeIcon style={FontAws} icon={faList}/>&nbsp; OrderList</Card.Text></Link>
                    <Link to="/manageDestinations" style={linkUnderline}><Card.Text style={text}><FontAwesomeIcon style={FontAws} icon={faTasks}/>&nbsp; Manage Destinations</Card.Text></Link>
                    <Link to="/addDestinations" style={linkUnderline}><Card.Text style={text}><FontAwesomeIcon style={FontAws} icon={faPlus}/>&nbsp; Add Destinations</Card.Text></Link>
                    <Link to="/makeAdmin" style={linkUnderline}><Card.Text style={text}><FontAwesomeIcon style={FontAws} icon={faUserShield}/>&nbsp; Make admin</Card.Text></Link>
                </Card.Body>
            </Card> 
        </div>
    );
};