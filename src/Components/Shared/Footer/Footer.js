import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Col, Container, Row } from 'react-bootstrap';

export  default function Footer () {
    //css
    const div = {backgroundColor:"#4f4f4f", lineHeight:".5rem", textAlign:"center", color:"#fff", padding:"2rem 0"}
    const icon = {margin:".7rem", fontSize:"1.2rem"}
    return (
        <div style={div}>
            <Container>
                <Row>
                    <Col>
                        <h5 className="mb-4">COMPANY</h5>
                        <p>About us</p>
                        <p>Our services</p>
                        <p>Contact</p>
                        <p>Blogs</p>
                    </Col>
                    <Col>
                        <h5 className="mb-4">CONTACT US</h5>
                        <p>mithuLix4356@gmail.com</p>
                        <p>+8804552352</p>
                        <p>
                            <span style={icon} ><FontAwesomeIcon icon={faInstagram}  /></span><span style={icon} ><FontAwesomeIcon icon={faFacebook} /></span><span style={icon} ><FontAwesomeIcon icon={faGoogle} /></span><span style={icon} ><FontAwesomeIcon  icon={faTwitter} /></span>
                        </p>
                    </Col>
                    <Col>
                        <h5 className="mb-4">ADDRESS</h5>
                        <p>5034, Halhalia</p>
                        <p>Domar, Nilphamari</p>
                        <p>Rangpur N5, Dhaka</p>
                        <p>Bangladesh</p>
                    </Col>
                    <p style={{marginTop:"3rem"}}>Copyright {(new Date()).getFullYear()} All Rights Reserved Travel hub.</p>
                </Row>
            </Container>
        </div>
       
        
    );
};
