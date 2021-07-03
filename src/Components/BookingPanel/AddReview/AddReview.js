import axios from 'axios';
import React, { useState }  from 'react';
import { Button, ButtonGroup, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import SidebarBookingPanel from '../SidebarBookingPanel/SidebarBookingPanel';


export default function  AddReview () {
    const { register, handleSubmit } = useForm();
    const [modal, setModal] = useState(false);

    const [imageURL, setImageURL] = useState(null)
    const handleImage = (e) => {
        const imageData = new FormData();
        imageData.set('key','bfb6697942dc1322d12730fc343c43ee')
        imageData.append('image',e.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {console.log(error)});
    }

    const onSubmit = data => {  const addReview = { name: data.name, imageURL: imageURL, description: data.description}
        if (imageURL) {
            fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},body: JSON.stringify(addReview)})
            .then(res => res.json())
            .then(data => { setModal(true)})
        }
    };


    //css
    const book = { backgroundColor:"#f1f1f1"}
    const halfCol = { margin:"2rem 1rem"}
    const titleBtn = {textDecoration: 'inherit', color:"white", backgroundColor:"#4f4f4f",border:"none", fontWeight:"500"};
    const h6 = { margin:"0", padding:"1rem", backgroundColor:"#fff",}
    const file = { width: "100%", border: "1px solid #f7fffb", borderRadius: ".3rem", backgroundColor: "#fff" }


    return (
        <div>
            <Container>
                <Row className="g-0">
                    <Col><SidebarBookingPanel/></Col>
                    <Col md={10}style={book}>
                        <h6 style={h6}>SEND A REVIEW</h6>
                        <Col style={halfCol} md={6}>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group>
                                <Form.Control name="name" ref={register({ required: true })} className="mb-2" placeholder="Enter your name"/>
                                <Form.Control name="description"  as="textarea" rows={4}  ref={register({ required: true })} className="mb-2" placeholder="give brief review"/>
                                <Form.Control name="image"onChange={handleImage} ref={register({ required: true })} className="mb-1" type="file" style={file} />
                                {imageURL && <strong >Image uploaded successfully.</strong>}
                            </Form.Group>
                            <ButtonGroup>
                                <Button className="mt-3" type="submit" style={titleBtn}>Give a Review</Button>
                            </ButtonGroup>
                        </Form>
                        </Col>
                    </Col>
                </Row>
                {/* modal */}
                <Modal show={modal} onHide={()=>setModal(false)} centered>
                    <Modal.Body><h6>Destination added successfully.</h6></Modal.Body>
                    <Modal.Footer><Button variant="secondary btn-sm" onClick={()=> setModal(false)}>Close</Button></Modal.Footer>
                </Modal>
            </Container>
        </div>
    );
};