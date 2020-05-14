import React from 'react';
import { Card } from 'react-bootstrap';
import './../css/StatePlace.css';

export default function StatePlace(props) {
    return (
        <Card className="col-md-4 col-sm-6 col-xs-12 cardContainer" >
            <div className="cardOuterDiv">
                <Card.Img variant="top" src={`${props.picture}`} className="cardImg" />
                <Card.Body className="cardBody">
                    <Card.Title className="cardTitle">{`${props.place}`}</Card.Title>
                </Card.Body>
            </div>
        </Card>
    );
}