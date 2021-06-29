import React, { useState } from 'react';
import { Button, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import SidebarBookingPanel from '../SidebarBookingPanel/SidebarBookingPanel';


export default function  Review () {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
    fetch('https://fathomless-everglades-19778.herokuapp.com/addReview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},body: JSON.stringify(data)})
        .then(res => res.json())
        .then(data => { alert('your successfully reviewed us.')})
    }

    //css
    const book = { backgroundColor:"#f1f1f1", height:"100vh"}
    const halfCol = { margin:"2rem 1rem"}
    const titleBtn = {textDecoration: 'inherit', color:"white", backgroundColor:"#4f4f4f",border:"none", fontWeight:"500"};
    const h6 = { margin:"0", padding:"1rem", backgroundColor:"#fff",}

    return (
        <div>
            <Container>
                <Row className="g-0">
                    <Col><SidebarBookingPanel/></Col>
                    <Col md={10}style={book}>
                        <h6 style={h6}>SEND A REVIEW</h6>
                        <Col style={halfCol} md={6}>
                        <Form onSubmit={handleSubmit(onSubmit)} className="form-inline">
                            <InputGroup size="md" className="mb-3">
                                    <FormControl aria-label="Small" type="text" placeholder="Name"/>
                                </InputGroup>
                                <InputGroup size="md" className="mb-3">
                                    <FormControl aria-label="Small" type="text" placeholder="Email"/>
                                </InputGroup>
                                <InputGroup size="md" className="mb-3">
                                    <FormControl aria-label="Small" type="text" placeholder="Subject"/>
                                </InputGroup>
                                <Form.Group controlId="exampleForm.ControlTextarea1"  className="mb-3">
                                    <Form.Control as="textarea" rows={4} placeholder="Leave a review" />
                                </Form.Group>
                                <Button type="submit" size="md" style={titleBtn}>SEND A REVIEW</Button>
                        </Form>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
