import {NavLink} from "react-router-dom";
import AuthenticationButton from "../authentication/AuthenticationButton";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";


export default function Navibar() {
    return (
        <header style={{paddingBottom: "1rem"}}>
            <Navbar style={{padding: 0}} bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={NavLink} to="/" replace>Venho</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/ingredients" replace>Ingredients</Nav.Link>
                            <Nav.Link as={NavLink} to="/items" replace>Items</Nav.Link>
                            <Nav.Link as={NavLink} to="/items/create" replace>Create Item</Nav.Link>
                        </Nav>
                        <Navbar.Text>
                            <AuthenticationButton/>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};