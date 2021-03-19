import React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import first from '../../images/toyota-logo.png';
import second from '../../images/General-Motors-logo.png';
import third from '../../images/ford-logo.png';
import fourth from '../../images/michelin-logo.png';
import fifth from '../../images/bridgestone-logo.png';


const About = () => {
      return (
            <div>
            <Jumbotron className = "bg-light" fluid>
                <Container>

                    <Row className="text-center">
                        <h3>Trusted by 10+ Leading Brands, Companies, and Organizations. Featured & Mentioned in  many more companies</h3>
                    </Row>

                    <Row style={{alignItems: "center", marginTop: "50px"}}>
                       
                        <Col><img className="w-75" src={first} alt=""/></Col>
                        <Col><img className="w-75" src={second} alt=""/></Col>
                        <Col><img className="w-75" src={third} alt=""/></Col>
                        <Col><img className="w-75" src={fourth} alt=""/></Col>
                        <Col><img className="w-75" src={fifth} alt=""/></Col>
        
                    </Row>

                </Container>
            </Jumbotron>
        </div>
      );
};

export default About;