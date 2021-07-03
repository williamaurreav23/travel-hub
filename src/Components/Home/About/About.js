import React from 'react';
import './About.css'
import aboutImg from '../../../images/backgrounds/about-3.jpg';
import { Button, ButtonGroup, Col, Container, Row } from 'react-bootstrap';



export default function About () {

    const leftCol = {color:"#4f4f4f"}
    const titleBtn = { color:"white", backgroundColor:"#4f4f4f", border:"none", fontWeight:"500"};
    const rightCol = {borderRadius:".5rem", border:"0", background: "rgba(255,255,255,0.8)",
                    boxShadow: "10px 10px 20px -6px rgba(0,0,0,0.2)"}
    const img = {padding:"1rem", }

    return (
        <div>
            <Container style={{marginTop:"7rem"}}>
            <Row id="Row" >
                <Col const={leftCol}>
                    <p>ABOUT TRAVEL-HUB</p>
                    <h1>WORLD'S BEST TRAVEL AGENCY SINCE 2020.</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis ipsum consequatur eaque eligendi porro veritatis beatae doloribus ab a. Quos. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiu smod tempor incididunt ut labore dolore magna aliqua.Quis ipsum suspen disse ultrices gravida Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    <ButtonGroup><Button style={titleBtn}>Know More</Button></ButtonGroup>
                </Col>
                <Col style={rightCol} id="rightCol">
                    <img src={aboutImg} style={img} id="aboutImg" alt=""/>
                </Col>
            </Row>
            </Container>
        </div>
    );
};
