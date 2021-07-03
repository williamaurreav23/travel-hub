import './Destinations.css';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import DestinationCards from './DestinationCards';


export default function Destinations ()  {
    const [destinations, setDestinations] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => { fetch("http://localhost:5000/getDestinations")
        .then(res => res.json())
        .then(data => {  setDestinations(data); setSpinner(false) })
    }, []);

    //css
    const h2={color:"#4f4f4f",borderRadius:".5rem", textAlign:"center", background: "rgba(255,255,255,0.2)", 
                    boxShadow: "10px 10px 20px -6px rgba(0,0,0,0.1)", backdropFilter: "blur(12px)"}
    const titleBtn = { color:"white", backgroundColor:"#4f4f4f", border:"none", fontWeight:"500"};

    return (
        <div>
            <Container style={{marginTop:"5rem"}}>
                <Container><Row md={3} className="justify-content-center"><h2 style={h2}>DESTINATIONS</h2></Row></Container> 
                <Row className="g-4 mt-3"> 
                    {spinner && <div className="text-center"> <Spinner animation="border" variant="secondary" /></div>} 
                </Row>
                
                <Container> 
                    <Row className="justify-content-center">
                        <Col id="destinations">
                            {destinations.map(destination => <DestinationCards destination={destination} key={destination._id}></DestinationCards>)}
                        </Col>
                    </Row>
                    <Col className="text-center mb-4 mt-4">
                        <Button style={titleBtn} className="btn-md disabled">Explore more coming...</Button>
                    </Col>
                </Container>
            </Container>
        </div>
    );
};
