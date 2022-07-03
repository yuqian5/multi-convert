import './App.css';

import {Col, Container, Navbar, NavItem, NavLink, Offcanvas, Row} from "react-bootstrap";

import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Distance from "./components/Distance";
import Weight from "./components/Weight";
import Temperature from "./components/Temperature";
import Footer from "./components/Footer";
import {useState} from "react";

function App() {
    const [about, setAbout] = useState(false);

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="">Multi Convert</Navbar.Brand>

                    <NavItem>
                        <NavLink style={{color: "white"}} onClick={() => setAbout(true)}>About</NavLink>
                    </NavItem>
                </Container>
            </Navbar>

            <Container>
                <Row>
                    <Col id={"distance"} lg={4}>
                        <Distance />
                    </Col>
                    <Col id={"weight"} lg={4}>
                        <Weight />
                    </Col>
                    <Col id={"temperature"}>
                        <Temperature />
                    </Col>
                </Row>
            </Container>

            <Offcanvas show={about} onHide={() => setAbout(false)} placement={"end"}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>About</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Hope you enjoy this converter :)
                    <br/><br/>
                    <h5>
                        Contact
                    </h5>
                    <div className={"d-flex"}>
                        <a href="https://github.com/yuqian5" style={{margin: "0 5px", color: "var(--bs-dark)"}}>
                            <FontAwesomeIcon icon={faGithub} size="2x"/>
                        </a>
                        <br/>
                        <a href="https://www.linkedin.com/in/kerrycao98" style={{margin: "0 5px", color: "var(--bs-dark)"}}>
                            <FontAwesomeIcon icon={faLinkedinIn} size="2x"/>
                        </a>
                        <br/>
                        <a href="mailto:kcyq98@gmail.com" style={{margin: "0 5px", color: "var(--bs-dark)"}}>
                            <FontAwesomeIcon icon={faEnvelope} size="2x"/>
                        </a>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>

            <div style={{position: "fixed", bottom: 0, width: "100%", background: "var(--bs-dark)"}}>
                <Footer />
            </div>
        </>
    );
}

export default App;
