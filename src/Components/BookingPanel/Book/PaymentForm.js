import React, { useContext, useMemo } from "react";
import {useStripe,useElements,CardNumberElement,CardCvcElement,CardExpiryElement} from "@stripe/react-stripe-js";
import { Button, Card, Col, Container, Form, FormControl, InputGroup} from "react-bootstrap";
import { UserContext } from "../../../App";
import { useParams } from "react-router-dom";

const useOptions = () => {
  const options = useMemo(() => ({
    style: {base: {color: "#424770",letterSpacing: "0.025em",
    fontFamily: "Source Code Pro, monospace","::placeholder": {color: "#aab7c4"}},
    invalid: {color: "#9e2146"}}}),[]);return options;};



export default function PaymentForm () {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const {price, title} = useParams();
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const handleSubmit = async event => {event.preventDefault();
  if (!stripe || !elements) { return;}

const payload = await stripe.createPaymentMethod({
    type: "card",card: elements.getElement(CardNumberElement)});
    console.log("[PaymentMethod]", payload);
};

//css
const txt = {fontSize:".9rem", fontWeight:"500", marginBottom:"-.3rem" }
const titleBtn = {textDecoration: 'inherit', color:"white", backgroundColor:"#4f4f4f",border:"none", fontWeight:"500"};
const formCltr = { marginBottom:"1rem", backgroundColor:"#fff", border:"none"}


return (
    <Container >
      <Form>
          <FormControl disabled style={formCltr} size="md" type="text" value={loggedInUser.name}/>
          <FormControl disabled style={formCltr} size="md" type="text" value={loggedInUser.email}/>
          <FormControl disabled style={formCltr} size="md" type="text" value={title}/>
      </Form>

      <Card.Text style={txt}>PAY WITH STRIPE METHOD :</Card.Text>
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-2">
          <CardNumberElement options={options} />
          <Col className="d-flex">
            <CardExpiryElement options={options}/>
            <CardCvcElement options={options}/>
          </Col>
        </InputGroup>
          <Button className="btn-sm" type="submit" style={titleBtn} disabled={!stripe}>$ {price}  to Pay</Button>
      </Form>
    </Container>
  );
};

