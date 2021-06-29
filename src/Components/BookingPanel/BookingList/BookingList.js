import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import SidebarBookingPanel from '../SidebarBookingPanel/SidebarBookingPanel';
import BookingListCards from './BookingListCards';

export default function BookingList () {
    const [loggedInUser, setLoggedInUser] = useState({});
    const [bookingLists, setBookingLists] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        fetch("https://fathomless-everglades-19778.herokuapp.com/review?email=" + loggedInUser.email)
        .then(res => res.json())
        .then(data => {setBookingLists(data); setSpinner(false)})
    }, [])

    //css
    const book = { backgroundColor:"#f1f1f1", height:"100vh"}
    const h6 = { margin:"0", padding:"1rem", backgroundColor:"#fff",}

    return (
        <div>
            <Container>
                <Row className="g-0">
                    <Col><SidebarBookingPanel/></Col>
                    <Col md={10}style={book}>
                        <h6 style={h6}> DEAR, {loggedInUser.name} YOU'VE {bookingLists.length} BOOKINGS.</h6>
                        <Row className="g-4 mt-3"> 
                            {spinner && <div className="text-center"> <Spinner animation="border" variant="secondary" /></div>} 
                        </Row>
                        {bookingLists.map(service => <BookingListCards service={service} key={service._id}></BookingListCards>)}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};