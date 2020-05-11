import React from 'react';

export default function StatePicture(props) {
    return (
        <div style={{backgroundImage: `url('${props.image}')`, height: '30rem', width: '100%', backgroundSize: 'cover', display: 'flex', textAlign: 'center', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} >
            <h2 style={{fontSize: '10rem', marginTop: '15rem', width: '100%'}}>{props.stateName}</h2>
        </div>
    );
}
