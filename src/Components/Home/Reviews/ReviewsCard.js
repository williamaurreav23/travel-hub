import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

export default function ReviewsCard (props) {
    const {imageURL, description, name} = props.review;

    //css
    const CardsCol = {padding:"0% ",}
    const cards  ={width: "18rem",  height:" 20rem", lineHeight:"1.2rem", marginTop:"5rem", border:"0", background: "rgba(255,255,255,0.8)",
                    boxShadow: "10px 10px 20px -6px rgba(0,0,0,0.3)"};
    const cBody = { overflow:"hidden", height:" 14rem", marginBottom:"1rem", textOverflow:"ellipsis" };
    const CardImg ={width: "10rem", height:"10rem", borderRadius:"50%", margin:"-4rem auto -.3rem"}
    const star = { fontSize:".9rem", color:"#ffeb35", float:"right"}

    return (
        <div>
            <Container>
                <Row>
                    <Col style={CardsCol}>
                        <Card style={cards}>
                                <Card.Img style={CardImg} variant="top" src={imageURL}/>
                            <Card.Body style={cBody}>
                                <Card.Title>{name} <span style={star}><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></span></Card.Title>
                                <Card.Text> {description}...</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
