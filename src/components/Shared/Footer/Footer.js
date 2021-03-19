import React from 'react';
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
      faFacebookF,
      faInstagram,
      faTwitter,
      faWhatsappSquare,
      faYoutubeSquare,
    } from "@fortawesome/free-brands-svg-icons";

  // import logo from '../../../images/logo.png';

const Footer = () => {
      const path = useLocation().pathname;

      return (
            <div>
      <Jumbotron className = "bg-light" fluid>
        <Container>
          {(path === "/" || path === "/") && (
            <Row>
              <Col>
                <ul className="list-unstyled text-left">
                  <h3>Automobile Searching App</h3>
                  <li>About</li>
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                  <li>Support 24/7</li>
                  <li>Contact Us</li>
                </ul>
              </Col>
              <Col>
                <ul className="list-unstyled text-left">
                  <h3>Features</h3>
                  <li>Add New Car</li>
                  <li>Edit Existing Car</li>
                  <li>Delete Listed Car</li>
                  <li>Quick Search</li>
                  <li>AI Integration</li>
                </ul>
              </Col>
              <Col>
                <ul className="list-unstyled text-left">
                  <h3>Community</h3>
                  <li>Leaders</li>
                  <li>Racer</li>
                  <li>Professionals</li>
                  <li>Partners</li>
                  <li>Blog</li>
                </ul>
              </Col>
            </Row>
          )}

          <Row className="pb-0 pt-0 mb-0">
            <Col className="text-left p-2 text-decoration-none">
              <p>
                &copy; All rights reserved {new Date().getFullYear()}
              </p>
            </Col>
            <Col className="text-right">
            {/* <Image src={logo} className="logoImg" /> */}

              <a href="#">
                {" "}
                <FontAwesomeIcon
                  className="text-primary mr-1"
                  icon={faFacebookF}
                />
              </a>
              <a href="#">
                {" "}
                <FontAwesomeIcon className="text-info mr-1" icon={faWhatsappSquare}/>
              </a>
              <a href="#">
                {" "}
                <FontAwesomeIcon className="text-dark mr-1" icon={faTwitter} />
              </a>
              <a href="#">
                {" "}
                <FontAwesomeIcon
                  className="text-secondary mr-1"
                  icon={faInstagram}
                />
              </a>
              <a href="#">
                {" "}
                <FontAwesomeIcon className="text-danger" icon={faYoutubeSquare} />
              </a>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
      );
};

export default Footer;