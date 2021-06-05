import React from 'react';
import { Col, Container, ListGroup, Row, Image, Form, Button, Card } from "react-bootstrap";

const Cart = () => {
    return (
        <div id="cart">
            <Container>
                <Row className="m-5">
                    <Col md={8}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col md={2}>
                                        <Image src="" alt="image" fluid rounded />
                                    </Col>
                                    <Col md={3}>
                                        <p>sony name</p>
                                    </Col>
                                    <Col md={2}>
                                        <p>$:20.33</p>
                                    </Col>
                                    <Col md={2}>
                                        <Form.Control as="select" value="1">
                                            <option value="1">4</option>
                                        </Form.Control>
                                    </Col>
                                    <Col md={2}>
                                        <Button type="button" variant="light">
                                            <i className="fa fa-trash"></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col md={4}>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <h2>Subtotal (1) items</h2>
                                    $19.99
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button type="button" className="btn-block">
                                        Proceed to Checkout
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Cart;
