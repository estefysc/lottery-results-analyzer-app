import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusMinus} from '@fortawesome/free-solid-svg-icons';
import "./Navigation.css";

function Navigation() {
    return (
        <>
            <Navbar variant="dark" expand="md">
                <Navbar.Brand className="brand" href="#home">
                    <FontAwesomeIcon icon={faPlusMinus} />
                </Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="nav-link" href="#home">About</Nav.Link>
                            <NavDropdown className="drp-menu" title="Explore" id="navbarScrollingDropdown">
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