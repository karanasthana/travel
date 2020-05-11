import React from 'react';
import { Card } from 'react-bootstrap';

export default function StatePicture(props) {
    return (
        <Card style={{ display: 'inline-block', textAlign: 'center', padding: '30px', border: 'none' }} className="col-md-4 col-sm-6 col-xs-12" >
            <div style={{ border: '1px solid rgba(0,0,0,.125)', borderRadius: '5px' }}>
                <Card.Img variant="top" src={`${props.picture}`} style={{ height: '10rem', width: 'auto' }} />
                <Card.Body style={{ textAlign: 'center' }}>
                    <Card.Title>{`${props.place}`}</Card.Title>
                </Card.Body>
            </div>
        </Card>
    );
}