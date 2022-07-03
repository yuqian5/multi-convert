import React from "react";
import {Container} from "react-bootstrap";


/**
 * Footer
 * @returns {JSX.Element|string}
 * @constructor
 */
function Footer() {
    let startYear = "2022";
    let currentYear = new Date().getFullYear().toString();

    return (
        <Container style={{textAlign:"center", padding: "15px 20px", color: "white"}}>
            <small>Copyright &copy; {startYear}{currentYear === startYear ? "" : `-${currentYear}`} by Kerry Cao. All Rights Reserved</small>
        </Container>
    );
}

export default Footer;