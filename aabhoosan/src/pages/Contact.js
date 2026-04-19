// src/pages/Contact.jsx
import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message Sent! We'll get back to you soon. ✅");
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <Container className="my-5 " style={{ fontFamily: "Poppins" }} >
            {/* Header */}
            <Row className="mb-4">
                <Col>
                    <h1 className="text-center fw-bold">Contact Us</h1>
                    <p className="text-center text-muted fs-5">
                        Have questions? Reach out to us and we’ll get back to you as soon as possible.
                    </p>
                </Col>
            </Row>

            {/* Contact Info Cards */}
            <Row className="mb-5 text-center">
                <Col md={4} className="mb-3">
                    <Card className="p-4 h-100 shadow-sm border-0">
                        <FaEnvelope size={30} className="mb-2" style={{ color: "#FFD700" }} />
                        <Card.Title>Email</Card.Title>
                        <Card.Text>support@theaabhooshan.com</Card.Text>
                    </Card>
                </Col>
                <Col md={4} className="mb-3">
                    <Card className="p-4 h-100 shadow-sm border-0">
                        <FaPhone size={30} className="mb-2" style={{ color: "#FFD700" }} />
                        <Card.Title>Phone</Card.Title>
                        <Card.Text>+91 9876543210</Card.Text>
                    </Card>
                </Col>
                <Col md={4} className="mb-3">
                    <Card className="p-4 h-100 shadow-sm border-0">
                        <FaMapMarkerAlt size={30} className="mb-2" style={{ color: "#FFD700" }} />
                        <Card.Title>Address</Card.Title>
                        <Card.Text>Pune, Maharashtra, India</Card.Text>
                    </Card>
                </Col>
            </Row>

            {/* Contact Form */}
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card className="p-4 shadow-sm border-0">
                        <h4 className="mb-4 text-center" style={{ color: "#D2B46C" }}>Send Us a Message</h4>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Your Name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="email"
                                    placeholder="Your Email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    placeholder="Your Message"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Button type="submit" className="w-100" style={{ backgroundColor: "#D2B46C", border: "none", color: "#333" }}>
                                Send Message
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;