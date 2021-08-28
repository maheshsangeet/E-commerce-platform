import React from 'react'
import { Container, ListGroup, Row, Col, Image, Card, Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import data from "../data.js"
import {useState, useEffect} from "react"

const Product = (props) => {
    console.log(props);

    const [product,setProduct] = useState({});
    const [qty, setQty] = useState(1);

    useEffect(() => {
        const newData = data.find((d) => d._id == props.match.params.id)
        setProduct(newData)
    }, [])
    
    return (
        <div>
            <Container>
                <Link className="btn btn-light my-3" to="/">
                    Go Back
                </Link>
                <Row>
                    <Col md={6}>
                        <Image src={product.image} alt={product.name} fluid  style={{padding:'20px',height:'350px',boxShadow:'inset 1px 1px 3px  gray'}}/>
                    </Col>
                    <Col md={3}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h3>{product.name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h3>Price ${product.price}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <p>Description: {product.description}</p>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Price:</Col>
                                        <Col>
                                        <strong>{product.price}</strong>
                                         </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Status</Col>
                                        <Col>
                                            {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                {product.countInStock > 0 && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Qty</Col>
                                            <Col>
                                                <Form.Control 
                                                    as="select"
                                                    value={qty}
                                                    onChange= {(e) => setQty(e.target.value)}
                                                >
                                                    {[...Array(product.countInStock).keys()].map((x) => (
                                                        <option key={x+1} value={x+1}>
                                                            {x+1}
                                                        </option>
                                                    ))}
                                                </Form.Control>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )}
                                <ListGroup.Item>
                                    <Button 
                                        type="button"  
                                        disabled={product.countInStock===0}
                                    >
                                    Add to Cart                    
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
export default Product;
