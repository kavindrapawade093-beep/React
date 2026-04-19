import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
// What Can You Sell?
// ✅ Array of items to display in the Sell Section
const items = [
    { img: "https://seller.theaabhooshan.com/assets/images/categories/gold-jewellery.png", name: "Necklace" },
    { img: "https://seller.theaabhooshan.com/assets/images/categories/silver-jewellery.png", name: "Earrings" },
    { img: "https://seller.theaabhooshan.com/assets/images/categories/rajasthani-jewellery.png", name: "Bridal Set" },
    { img: "https://seller.theaabhooshan.com/assets/images/categories/bridal-set.png", name: "Gold Set" },
    { img: "https://seller.theaabhooshan.com/assets/images/categories/handmade-jewellery.png", name: "Beaded Jewelry" },
    { img: "https://seller.theaabhooshan.com/assets/images/categories/temple-jewellery.png", name: "Temple Jewelry" },
    { img: "https://seller.theaabhooshan.com/assets/images/categories/Fesion-jewellery.png", name: "Diamond Set" },
    { img: "https://seller.theaabhooshan.com/assets/images/categories/antiqe-jewellery.png", name: "Pearl Jewelry" },
];

// SellSection Component
function SellSection() {
    return (
        // ✅ Main Container for the section
        <Container className="text-center py-4" style={{ fontFamily: " Poppins" }} >

            {/* Section Heading */}
            <h2 className="fw-bold">What Can You Sell?</h2>
            <p className="text-muted mb-4">
                List and sell all types of jewellery
            </p>

            {/* Grid of Cards */}
            <Row className="g-4 justify-content-center">
                {items.map((item, index) => (
                    <Col md={3} sm={6} key={index}>

                        {/* Card for each item */}
                        <Card className="border-0 shadow-sm overflow-hidden hover-card">

                            <div className="position-relative">

                                {/* Item Image */}
                                <Card.Img src={item.img} className="sell-img" />

                                {/* Overlay on hover */}
                                <div className="overlay d-flex align-items-center justify-content-center">
                                    <h5 className="text-white fw-bold">{item.name}</h5>
                                </div>
                            </div>

                        </Card>

                    </Col>
                ))}
            </Row>
        </Container>
    );
}

// Export SellSection component
export default SellSection;