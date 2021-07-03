import React from 'react';
import { Col, Container, FormControl, InputGroup, Row, Form, Button} from 'react-bootstrap';


export default function Contact() {

    //css
    const contact= {margin:"5rem 0", }
    const h2= {color:"#4f4f4f", textAlign:"center", marginBottom:"2rem", lineHeight:"2.5rem"}
    const InputCss ={borderRadius:".7rem", padding:"1rem", border:"0", background: "rgba(255,255,255,0.8)",
                    boxShadow: "10px 10px 20px -6px rgba(0,0,0,0.3)"};
    const titleBtn = {textDecoration: 'inherit', color:"white", backgroundColor:"#4f4f4f",border:"none", fontWeight:"500"};

    return (
        <div style={contact}>
            <Container>
                <Row className="justify-content-center">
                <h3 style={h2}>CONTACT US TO GET INQUIRY ABOUT YOUR DESTINATION </h3>
                    <Col md={8} style={InputCss}>
                        <InputGroup size="md" className="mb-3">
                            <FormControl aria-label="Small" type="text" placeholder="Name"/>
                        </InputGroup>
                        <InputGroup size="md" className="mb-3">
                            <FormControl aria-label="Small" type="text" placeholder="Email"/>
                        </InputGroup>
                        <InputGroup size="md" className="mb-3">
                            <FormControl aria-label="Small" type="text" placeholder="Subject"/>
                        </InputGroup>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={4} placeholder="Leave a comment" />
                        </Form.Group><br/>
                        <Button type="submit" size="md" style={titleBtn}>SEND A MESSAGE</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};