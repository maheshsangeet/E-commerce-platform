import React from 'react';
import data from "../data.js";
import {useState} from "react";
import {Container,Row,Col,Card} from "react-bootstrap"
import {Link} from "react-router-dom"

function HomeScreen() {
    const [products,setProducts] = useState(data);

    return (
        <div>
            <Container>
                <Row>
                    {products.map((prod)=>(
                        <Col sm={12} md={6} lg={4} xl={3}>
                            <Card className="my-3 p-3 rounded">
                                <Link to={`/products/${prod._id}`}>
                                    <Card.Img src={prod.image} variant="top" />
                                </Link> 
                            </Card>
                            <Card.Body>
                                <Card.Title as="div">
                                    <strong>{prod.name}</strong>
                                </Card.Title>
                                <Card.Text as="div">
                                    <p>Rating:{prod.rating}</p>
                                    <p>Avg Rating:{prod.numReviews}</p>
                                </Card.Text>
                                <Card.Text as="h3" className="pt-2">
                                    ${prod.price}
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default HomeScreen;
