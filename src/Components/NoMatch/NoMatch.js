import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useHistory} from 'react-router-dom';
import {} from "react-router-dom";


export default function NoMatch() {
    const history = useHistory();

    //css
    const NoMatchCss = {textAlign: "center",backgroundColor : "#f5f5f5", marginTop: "10%", fontSize: "1.3rem",  padding:"2rem", borderRadius:".5rem"};
    const titleBtn = {textDecoration: 'none', color:"white", backgroundColor:"#4d4d4d"};

    return (
        <Container style = {NoMatchCss}>
            <h1>404</h1>
            <h4>This Page could not be loaded</h4>
            <p>SORRY BUT THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST,<br/> 
                HAVE BEEN REMOVED. NAME CHANGED OR IS TEMPORARILY UNAVAILABLE.
            </p>
            <Button onClick={() => history.goBack()} variant="contained" style={titleBtn}>BACK TO PREVIOUS PAGE</Button>
        </Container>
    );
};

