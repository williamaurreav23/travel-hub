import React, { useState, useEffect} from 'react';
import './Reviews.css';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import ReviewsCard from './ReviewsCard';

export default function Reviews () {
    const [reviews, setReviews] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => { fetch("https://travel-hub-server.herokuapp.com/getReviews")
        .then(res => res.json())
        .then(data => {  setReviews(data); setSpinner(false) })
    }, []);

    //css
    const h2={color:"#4f4f4f",textAlign:"center", margin:"2rem 0 1rem", fontSize:"1.8rem"};
    const titleBtn = { color:"white", backgroundColor:"#4f4f4f", border:"none", fontWeight:"500", margin:"2rem 0 1rem",};

    return (
        <Container style={{marginTop:"5rem"}}>
            <h2 style={h2}> MANY OF FEW REVIEWS</h2>
            <Container>
                <Row className="g-4 mt-3"> 
                    {spinner && <div className="text-center"> <Spinner animation="border" variant="secondary" /></div>} 
                </Row>
                <Row className="justify-content-center">
                    <Col id="reviews">
                        {reviews.map(review => <ReviewsCard key={review._id} review={review} ></ReviewsCard>) }
                    </Col>
                </Row>
                <Col className="text-center mb-4">
                    <Button style={titleBtn} className="btn-md disabled">See more reviews...</Button>
                </Col>
            </Container>
        </Container>
    );
};
