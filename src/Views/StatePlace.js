import React from 'react';
import { Card } from 'react-bootstrap';

export default function StatePicture(props) {
    return (
        <Card style={{ display: 'inline-block', textAlign: 'center', padding: '30px', border: 'none' }} className="col-md-4 col-sm-6 col-xs-12" >
            <div style={{ border: '1px solid rgba(0,0,0,.125)', borderRadius: '5px', padding: '1px', backgroundColor: '#178be7' }}>
                <Card.Img variant="top" src={`${props.picture}`} style={{ height: '10rem', width: 'auto', maxWidth: '10rem' }} />
                <Card.Body style={{ textAlign: 'center', padding: '0.7rem', marginTop: '10px', borderTop: '1px solid #BBB', backgroundColor: 'white' }}>
                    <Card.Title style={{ fontSize: '1.5rem' }}>{`${props.place}`}</Card.Title>
                </Card.Body>
            </div>
        </Card>
    );
}