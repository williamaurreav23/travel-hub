

import React from 'react';
import { Button, ButtonGroup, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import SidebarAdminPanel from '../SidebarAdminPanel/SidebarAdminPanel';


export default function MakeAdmin () {
    const { register, handleSubmit } = useForm();

    const onSubmit = () => {

    }
    //css
    const book = { backgroundColor:"#f1f1f1", height:"100vh"};
    const halfCol = { margin:"2rem 1rem"};
    const h6 = { margin:"0", padding:"1rem", backgroundColor:"#fff"};
    const titleBtn = { textDecoration: 'inherit', color: "white", backgroundColor: "#4f4f4f", border: "none", fontWeight: "500"};

    return (
    <div>
        <Container>
            <Row className="g-0">
                <Col><SidebarAdminPanel/></Col>
                <Col md={9}style={book}>
                    <h6 style={h6}>MAKE ADMIN</h6>
                    <Col style={halfCol} md={5}>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group>
                                <Card.Text className="mb-2"><strong>Enter Email</strong></Card.Text>
                                <Form.Control name="email" ref={register({ required: true })}/>
                            </Form.Group>
                            <ButtonGroup>
                                <Button className="mt-3" type="submit" style={titleBtn}>Submit</Button>
                            </ButtonGroup>
                        </Form>
                    </Col>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

