import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import "./Navigation.css";

function Navigation() {
    return (
        <>
            <Navbar variant="dark" expand="md">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Option 2</Nav.Link>
                            <Nav.Link href="#pricing">Option 3</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/*<Navbar bg="light" variant="light">*/}
            {/*    <Container>*/}
            {/*        <Navbar.Brand href="#home">Navbar</Navbar.Brand>*/}
            {/*        <Nav className="me-auto">*/}
            {/*            <Nav.Link href="#home">Home</Nav.Link>*/}
            {/*            <Nav.Link href="#features">Features</Nav.Link>*/}
            {/*            <Nav.Link href="#pricing">Pricing</Nav.Link>*/}
            {/*        </Nav>*/}
            {/*    </Container>*/}
            {/*</Navbar>*/}
        </>
    );
}

export default Navigation;