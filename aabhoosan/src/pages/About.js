// src/pages/About.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const teamMembers = [
    { name: "Kuldeep Pawade", role: "Founder & CEO", img: "https://static.vecteezy.com/system/resources/thumbnails/033/129/417/small/a-business-man-stands-against-white-background-with-his-arms-crossed-ai-generative-photo.jpg " },
    { name: "Riya Sharma", role: "Head of Design", img: "https://png.pngtree.com/png-vector/20240528/ourlarge/pngtree-single-asian-girl-in-formal-office-dress-business-professional-women-style-png-image_12502627.png " },
    { name: "Arjun Mehta", role: "Marketing Lead", img: "https://img.freepik.com/premium-photo/grizzled-handsome-man-bow-tie-suit-businessman-isolated-white-leader-tux-formal-wear_474717-75910.jpg?semt=ais_incoming&w=740&q=80" },
];

function About() {
    return (
        <div style={{ backgroundColor: "#fff8f0", fontFamily: "Poppins" }}>
            {/* Hero Section */}
            <div style={{
                backgroundColor: "  #eacf96", padding: "15px  0",
            }}>
                < Container >
                    <h1 className="text-center text-dark fw-bold">About TheAabhooshan</h1>
                    <p className="text-center text-dark fw-light fs-5">
                        Crafting exquisite jewelry with passion, precision, and trust.
                    </p>
                </Container>
            </div >

            <Container className="my-5">
                {/* Mission & Vision */}
                <Row className="mb-5">
                    <Col md={6} className="mb-3">
                        <Card className="p-4 h-100 border-0 shadow-sm" style={{ backgroundColor: "#fff7e6" }}>
                            <h3 style={{ color: "#D7B569" }}>Our Mission</h3>
                            <p style={{ color: "#333" }}>
                                To empower jewelry enthusiasts and sellers by providing a seamless, secure, and profitable platform.
                            </p>
                        </Card>
                    </Col>
                    <Col md={6} className="mb-3">
                        <Card className="p-4 h-100 border-0 shadow-sm" style={{ backgroundColor: "#fff7e6" }}>
                            <h3 style={{ color: "#D7B569" }}>Our Vision</h3>
                            <p style={{ color: "#333" }}>
                                To become the most trusted online marketplace for premium and authentic jewelry, connecting sellers and buyers globally.
                            </p>
                        </Card>
                    </Col>
                </Row>

                {/* Why Choose Us */}
                <Row className="mb-5">
                    <Col>
                        <h2 className="mb-4 text-center text-dark fw-bold">Why Choose TheAabhooshan?</h2>
                        <Row>
                            <Col md={4} className="text-center mb-3">
                                <div className="p-4 shadow-sm rounded" style={{ backgroundColor: "#fff7e6", transition: "transform 0.3s" }}>
                                    <i className="fs-1 mb-3">💎</i>
                                    <h5 style={{ color: "#D7B569" }}>Quality Products</h5>
                                    <p>Authentic and exquisite jewelry crafted to perfection.</p>
                                </div>
                            </Col>
                            <Col md={4} className="text-center mb-3">
                                <div className="p-4 shadow-sm rounded" style={{ backgroundColor: "#fff7e6", transition: "transform 0.3s" }}>
                                    <i className="fs-1 mb-3">🛡️</i>
                                    <h5 style={{ color: "#D7B569" }}>Secure Platform</h5>
                                    <p>Trusted payment and delivery systems ensuring peace of mind.</p>
                                </div>
                            </Col>
                            <Col md={4} className="text-center mb-3">
                                <div className="p-4 shadow-sm rounded" style={{ backgroundColor: "#fff7e6", transition: "transform 0.3s" }}>
                                    <i className="fs-1 mb-3">🚀</i>
                                    <h5 style={{ color: "#D7B569" }}>Fast Service</h5>
                                    <p>Quick onboarding and prompt support for sellers and buyers.</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                {/* Team Section */}
                <Row>
                    <Col>
                        <h2 className="mb-4 text-center text-dark fw-bold">Meet Our Team</h2>
                        <Row>
                            {teamMembers.map((member, idx) => (
                                <Col md={4} className="mb-3" key={idx}>
                                    <Card className="text-center p-3 h-100 border-0 shadow-sm team-card" style={{ transition: "transform 0.3s" }}>
                                        <Card.Img
                                            variant="top"
                                            src={member.img}
                                            alt={member.name}
                                            style={{ borderRadius: "50%", width: "150px", height: "150px", objectFit: "cover", margin: "0 auto" }}
                                        />
                                        <Card.Body>
                                            <Card.Title className="fw-bold">{member.name}</Card.Title>
                                            <Card.Text className="text-muted">{member.role}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>

            {/* Optional Footer Banner */}
            <div style={{
                backgroundColor: "#eacf96", padding: "40px 0"
            }}>
                < Container >
                    <h4 className="text-center text-dark fw-bold">Join TheAabhooshan Family Today!</h4>
                </Container>
            </div >

            <style>
                {`
          .team-card:hover {
            transform: translateY(-10px);
          }
          .team-card img:hover {
            transform: scale(1.05);
            transition: 0.3s;
          }
        `}
            </style>
        </div >
    );
}

export default About;