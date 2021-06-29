import { Col, Container, Row } from 'react-bootstrap';
import SidebarBookingPanel from '../SidebarBookingPanel/SidebarBookingPanel';
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { BrowserRouter } from "react-router-dom";
import PaymentForm from "./PaymentForm";
import "./BookingPayment.css";
const stripePromise = loadStripe("pk_test_51IkUGQDgqQnK6AZuzJt1sqbBOBMgzxSX72hYdGJpjegZITWHTDiv8MHHvDFGBJPdAR0rYhQtUhIWTDM408uLBa6v007PCeIvJN");

export default function BookingPayment () {

    //css
    const book = { backgroundColor:"#f1f1f1", height:"100vh"};
    const halfCol = { margin:"2rem 1rem"};
    const h6 = { margin:"0", padding:"1rem", backgroundColor:"#fff"};

    return (
        <div>
            <Container>
                <Row className="g-0">
                    <Col><SidebarBookingPanel/></Col>
                    <Col md={10}style={book}>
                        <h6 style={h6}>PLEASE, PROCESS PAYMENT TO BOOK YOUR DESTINATION.</h6>
                        <Col style={halfCol} md={5}>
                            <BrowserRouter>
                                <Elements stripe={stripePromise}> <PaymentForm/></Elements>
                            </BrowserRouter>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};