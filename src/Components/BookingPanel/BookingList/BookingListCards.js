import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, Col, Container } from 'react-bootstrap';


export default function BookingListCards ({service}) {


    //css
    const titleBtn = {textDecoration: 'inherit', color:"white", backgroundColor:"#4f4f4f",border:"none", fontWeight:"500"};
    const CardsCol = {padding:"0%"}
    const cards  ={width: "20rem",  height:" 24rem", lineHeight:"1.2rem", border:"0", background: "rgba(255,255,255,0.8)",
                     boxShadow: "10px 10px 20px -6px rgba(0,0,0,0.2)"}
    const CardImg ={width: "20rem", height:"12rem"}
    const cardBody = {marginTop:"-.5rem"}
    

    return (
        <Container>
            <Card style={cards}>
                <Card.Img style={CardImg} variant="left" src="" alt="Image not found"/>
                <Card.Body style={cardBody}>
                <Card.Title>{service.Design.title}</Card.Title>
                <Card.Text className="mt-2"> text</Card.Text>
                <Col className="d-flex justify-content-between mt-2">
                    <Card.Title> $ price</Card.Title>
                    <Button style={titleBtn} className="btn-sm mb-4"><FontAwesomeIcon style={{fontSize:".8rem"}} icon={faPlaneDeparture}/>&nbsp; {service.status}</Button>
                </Col>
                </Card.Body>
            </Card>
        </Container>
    );
};

