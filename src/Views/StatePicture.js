import React from 'react';

export default function StatePicture(props) {
    return (
        <div style={{backgroundImage: `url(${props.image})`, height: '40rem', width: '100%', backgroundSize: 'cover', display: 'flex', textAlign: 'center' }} >
            <h2 style={{fontSize: '10rem', marginTop: '20rem', width: '100%'}}>{props.stateName}</h2>
        </div>
    );
}
