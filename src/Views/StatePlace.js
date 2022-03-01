import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import './../css/StatePlace.css';
import Modal from 'react-bootstrap/Modal';
import * as _ from 'lodash';

export default function StatePlace(props) {
    const [showModal, setShowModal] = useState(false);

    let detailProps = undefined;
    let famousFor = undefined;
    
    let handleShow = () => {
        console.log('open the dialog for' + JSON.stringify(props));
        if (props.hasDetails) {
            console.log(JSON.parse(props.details));
            detailProps = JSON.parse(JSON.stringify(props.details));
            console.log('detail_props is : ' + detailProps);
            famousFor = detailProps.famous_for;
            console.log('famous_for is : ' + famousFor);
            setShowModal(true);
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
                show={showModal}
                onHide={() => setShowModal(false)}
                aria-labelledby="example-modal-sizes-title-sm"
                dialogClassName="place-dialog"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        {props.place}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {`${detailProps}`}
                    <div>
                        <h3>
                            Famous For
                        </h3>
                        <ul>
                            <li>{!_.isEmpty(detailProps) && detailProps.famous_for}</li>
                            <li>{!_.isEmpty(detailProps) && detailProps.famous_for}</li>
                            <li>{!_.isEmpty(detailProps) && detailProps.famous_for}</li>
                        </ul>
                    </div>
                    <div>
                        <h3>
                            Places to Visit
                        </h3>
                        <ul>
                            <li>{!_.isEmpty(detailProps) && detailProps.places_to_visit}</li>
                            <li>{!_.isEmpty(detailProps) && detailProps.places_to_visit}</li>
                        </ul>
                    </div>
                    <div>
                        <h3>
                            Weather
                        </h3>
                        <h4>
                            {!_.isEmpty(detailProps) && detailProps.weather}
                        </h4>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}