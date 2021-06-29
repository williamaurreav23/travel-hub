import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row, Spinner, Table } from 'react-bootstrap';
import SidebarAdminPanel from '../SidebarAdminPanel/SidebarAdminPanel';
import { UserContext } from '../../../App';


export default function OrderList () {
    const [loggedInUser] = useContext(UserContext);
    const [orderLists, setOrderLists] = useState([]);
    const {email, name} = loggedInUser;
    const [spinner, setSpinner] = useState(true);
    
    useEffect(() => {
        fetch('https://fathomless-everglades-19778.herokuapp.com/getService')
        .then(res => res.json())
        .then(data => { setOrderLists(data); setSpinner(false)})
    }, []);
    const {  Design, _id, status } = orderLists;

    //css
    const book = { backgroundColor:"#f1f1f1", height:"100vh"};
    const h6 = { margin:"0", padding:"1rem", backgroundColor:"#fff"};
    const tBody = {backgroundColor:"#fff", borderCollapse: "collapse",padding:"1rem", margin:"0"}
    const halfCol  ={lineHeight:"1.2rem",  background: "rgba(255,255,255,0.8)",
                boxShadow: "10px 10px 20px -6px rgba(0,0,0,0.2)", margin:"1rem", borderRadius:".5rem"}
    
    return (
    <div>
        <Container>
            <Row className="g-0">
                <Col><SidebarAdminPanel/></Col>
                <Col md={9}style={book}>
                    <h6 style={h6}>ORDER LIST</h6>
                    <Col style={halfCol} >
                        <Table><thead><tr><th>Name</th> <th>Email ID</th><th>Service</th><th>Status</th></tr> </thead></Table>
                        <Row> 
                            {spinner && <div className="text-center"> <Spinner animation="border" variant="secondary" /></div>} 
                        </Row>
                       {orderLists.map(orderList => 
                            <Container orderList={orderList} key={orderList._id}>
                                <Table hover size="sm" style={tBody}>
                                    <tbody><tr><td>{name}</td><td>{email}</td><td>{Design.title}</td><td>{status}</td></tr> </tbody>
                                </Table>
                            </Container>)
                        }
                    </Col>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

