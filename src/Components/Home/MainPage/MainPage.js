import React, { useState } from 'react';
import BackgroundSlider from 'react-background-slider'
import image1 from '../../../images/backgrounds/carosul.jpg';
import image3 from '../../../images/backgrounds/carosul10.jpg';
import image4 from '../../../images/backgrounds/carosul5.jpg';
import image5 from '../../../images/backgrounds/carosul6.jpg';
import image6 from '../../../images/backgrounds/carosul8.jpg';

import { ButtonGroup, Container, Form, Row, Button, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function MainPage () {
    const { register, handleSubmit } = useForm();
    const [startDate, setStartDate] = useState(new Date());
    const onSubmit = () => {
        //submit function here
    }

    //css
    const imgH1 = {color:"#4f4f4f", width:"85%", marginBottom:"-.1rem", padding:".5rem", background: "rgba(255,255,255,0.3)", backdropFilter: "blur(17px)"}
    const imgP = {color:"#4f4f4f", padding:".5rem",  background: "rgba(255,255,255,0.5)", backdropFilter: "blur(16px)"}
    const titleBtn = { textDecoration: 'inherit', color: "white", backgroundColor: "#4f4f4f", border: "none", fontWeight: "500", width: "100%" };

    return (
        <div>
            <div>
                <BackgroundSlider images={[image1,image3, image4, image5, image6]} duration={4}transition={1}/>
            </div>
            <Container>
                <Row>
                    <Col md={5}>
                        <h1 style={imgH1} >LUXURY JOURNEYS</h1>
                        <p style={imgP}>CRAFTING INDIVIDUALS AND UNIQUE ITIENERARIES TO EVERY CORNER OF JAPAN PERSUE THE POSSIBILITIES HERE.</p>
                    </Col>
                </Row>
                    
                <Form onSubmit={handleSubmit(onSubmit)} className="form-inline">
                    <Row className="mb-4 mt-5">
                        <Form.Group as={Col}><Form.Control  name="start" ref={register({ required: true })}  placeholder="Where to go"/></Form.Group>
                        <Form.Group as={Col}><Form.Control  name="hotel" ref={register({ required: true })}  placeholder="Choose a hotel"/></Form.Group>
                        {/* its style coming from bookingPanel/Book/BookingPayment.css */}
                        <Col md={2}><DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/></Col>
                        <ButtonGroup as={Col} md={2} className="mx-3 "><Button  type="submit" style={titleBtn}>Search</Button></ButtonGroup>
                    </Row> 
                </Form>
            </Container>
        </div>
    );
};