import React from 'react';
import { Card, Col, Container, Row, Button, ButtonGroup } from 'react-bootstrap';

export default function ReviewsCard ({ review }) {

    //css
    const CardsCol = {padding:"0%"}
    const titleBtn = { color:"white", backgroundColor:"#4f4f4f", border:"none", fontWeight:"500", borderRadius:"0"};
    const cards  ={width: "18rem",  height:" 20rem", lineHeight:"1.2rem", marginTop:"5rem", border:"0", background: "rgba(255,255,255,0.8)",
                    boxShadow: "10px 10px 20px -6px rgba(0,0,0,0.3)"};
    const CardImg ={width: "10rem", height:"10rem", borderRadius:"50%", margin:"-4rem auto -.3rem"}

    return (
        <div>
            <Container>
                <Row>
                    <Col style={CardsCol}>
                        <Card style={cards}>
                                <Card.Img style={CardImg} variant="top" src={review.photo}/>
                            <Card.Body>
                                <Card.Title>{review.name}</Card.Title>
                                <Card.Text> {review.description}</Card.Text>
                            </Card.Body>
                            <ButtonGroup><Button style={titleBtn}>Contact Reviewer</Button></ButtonGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
