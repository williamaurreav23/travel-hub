import React, {  useState } from 'react';
import { Button, Container, Row, Col, Form, Card, ButtonGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import SidebarAdminPanel from '../SidebarAdminPanel/SidebarAdminPanel';
const axios = require('axios').default;



export default function AddDestinations() {
    const { register, handleSubmit } = useForm();
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

    const history = useHistory()
    const onSubmit = data => { const addMobile = { name: data.name, company: data.company, price: data.price, img: imageURL }
        if (imageURL) {
            fetch('https://mobilemaya-backend.herokuapp.com/addMobile', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(addMobile)
            })
                .then(res => res.json())
                .then(data => { 
                    alert("Item added successfully")
                    history.push('/manageDestinations') 
                })
        }
    };

    //css
    const formBg = { backgroundColor: "#f1f1f1", padding: "1rem", borderRadius: ".5rem" }
    const titleBtn = { textDecoration: 'inherit', color: "white", backgroundColor: "#4f4f4f", border: "none", fontWeight: "500", width: "100%" };
    const file = { width: "100%", border: "1px solid #f7fffb", borderRadius: ".3rem", backgroundColor: "#fff" }
    const book = { backgroundColor:"#f1f1f1", height:"100vh"};
    const halfCol = { margin:"2rem 1rem"};
    const h6 = { margin:"0", padding:"1rem", backgroundColor:"#fff"};
    
    return (
    <div>
        <Container>
            <Row className="g-0">
                <Col><SidebarAdminPanel/></Col>
                <Col md={9}style={book}>
                    <h6 style={h6}>ADD DESTINATIONS</h6>
                    <Col style={halfCol} md={6}>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group>
                                <Form.Control name="name" ref={register({ required: true })} className="mb-2" placeholder="Enter destination title"/>
                                <Form.Control name="price"  ref={register({ required: true })} className="mb-2" type="number"  placeholder="Enter price"/>
                                <Form.Control name="description"  as="textarea" rows={4}  ref={register({ required: true })} className="mb-2" placeholder="Enter Description"/>
                                <Form.Control name="image"onChange={handleImage} ref={register({ required: true })} className="mb-1" type="file" style={file} />
                                {imageURL && <strong >Image uploaded successfully.</strong>}
                            </Form.Group>
                            <ButtonGroup>
                                <Button className="mt-3" type="submit" style={titleBtn}>Save to database</Button>
                            </ButtonGroup>
                        </Form>
                    </Col>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

