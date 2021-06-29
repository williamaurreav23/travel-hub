import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';



export default function DestinationCards  ({ service }) {

    //css
    const CardsCol = {padding:"0%"}
    const titleBtn = { color:"white", backgroundColor:"#4f4f4f", border:"none", fontWeight:"500"};
    const cards  ={width: "20rem",  height:" 24rem", lineHeight:"1.2rem", border:"0", background: "rgba(255,255,255,0.8)",
                     boxShadow: "10px 10px 20px -6px rgba(0,0,0,0.3)"}
    const CardImg ={width: "20rem", height:"12rem"}
    const cardBody = {marginTop:"-.5rem"}

    
    return (
        <div>
            <Container>
                <Row>
                    <Col style={CardsCol}>
                        <Card style={cards}>
                            <Card.Img style={CardImg} variant="top" src={service.imageURL} alt="Image not found"/>
                            <Card.Body style={cardBody}>
                            <Card.Title>{service.title}</Card.Title>
                            <Card.Text className="mt-2"> {service.description}</Card.Text>
                            <Col className="d-flex justify-content-between mt-2">
                                <Card.Title> $ {service.price}</Card.Title>
                                <Link to={`/bookingPayment/${service.title}/${service.price}`}><Button style={titleBtn} className="btn-sm mb-4"><FontAwesomeIcon style={{fontSize:".8rem"}} icon={faPlaneDeparture}/>&nbsp; Book Destination</Button></Link> 
                            </Col>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};