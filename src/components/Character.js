import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Character = ({ image, name, id, status }) => {



    return (
        <Link to={`/character/${id}`}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>{status}</Card.Title>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default Character
