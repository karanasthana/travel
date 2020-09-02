import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import './../css/StatePlace.css';
import Modal from 'react-bootstrap/Modal'

export default function StatePlace(props) {
    const [smShow, setSmShow] = useState(false);
    
    let handleShow = () => {
        console.log('open the dialog for' + JSON.stringify(props));
        if (props.hasDetails || true) {
            setSmShow(true);
        }
    };

    return (
        <div>
        <Card className="cardContainer" onClick={handleShow}>
            <div className="cardOuterDiv">
                <Card.Img variant="top" src={`${props.picture}`} className="cardImg" />
                <Card.Body className="cardBody">
                    <Card.Title className="cardTitle">{`${props.place}`}</Card.Title>
                </Card.Body>
            </div>
        </Card>
        <Modal
            size="lg"
            show={smShow}
            onHide={() => setSmShow(false)}
            aria-labelledby="example-modal-sizes-title-sm"
            dialogClassName="place-dialog"
        >
            <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
                {props.place}
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>...</Modal.Body>
        </Modal>
        </div>
    );
}