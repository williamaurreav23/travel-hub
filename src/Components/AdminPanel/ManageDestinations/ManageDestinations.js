import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Col, Container, Row, Spinner, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import SidebarAdminPanel from '../SidebarAdminPanel/SidebarAdminPanel';


export default function ManageDestinations () {
    const [deletes, setDeletes] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        fetch('https://mobilemaya-backend.herokuapp.com/mobiles')
        .then((res) => res.json())
        .then((data) => {  setDeletes(data);  setSpinner(false)})}, []);

    const history = useHistory();
    const handleDelete = id => {
        fetch(`https://mobilemaya-backend.herokuapp.com/delete/${id}`, { method: "DELETE" })
            .then(res => res.json())
            .then(data => { 
                alert(`${""} was deleted`) 
                history.push('/addDestinations')}
        )};

    //css
    const book = { backgroundColor:"#f1f1f1", height:"100vh"};
    const h6 = { margin:"0", padding:"1rem", backgroundColor:"#fff"};
    const tBody = {backgroundColor:"#fff", borderCollapse: "collapse",padding:"1rem", margin:"0"}
    const halfCol  ={lineHeight:"1.2rem",  background: "rgba(255,255,255,0.8)",
                boxShadow: "10px 10px 20px -6px rgba(0,0,0,0.2)", margin:"1rem", borderRadius:".5rem"}
    const icon1 = { color: "#4f4f4f", marginRight: "1rem", cursor: "pointer" }
    const icon2 = { color: "red", cursor: "pointer" }
    
    return (
    <div>
        <Container>
            <Row className="g-0">
                <Col><SidebarAdminPanel/></Col>
                <Col md={9}style={book}>
                    <h6 style={h6}>MANAGE DESTINATIONS</h6>
                    <Col style={halfCol} >
                        <Table><thead><tr><th>Name</th><th>Price</th><th>Action</th></tr> </thead></Table>
                        <Row> 
                            {spinner && <div className="text-center"> <Spinner animation="border" variant="secondary" /></div>} 
                        </Row>
                       {deletes.map(list => 
                            <Container list={list}>
                                <Table hover size="sm" style={tBody}>
                                    <tbody>
                                        <tr>
                                            <td>{"name"}</td>
                                            <td>{"price"}</td>
                                            <td className="text-center">
                                                <FontAwesomeIcon icon={faPencilAlt} style={icon1} />
                                                <FontAwesomeIcon icon={faTrashAlt} onClick={() => handleDelete("_id")} style={icon2} />
                                            </td>
                                        </tr>
                                    </tbody>
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
