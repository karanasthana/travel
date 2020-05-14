import React from 'react';

export default function StatePicture(props) {
    return (
        <div style={{backgroundImage: `url('${props.image}')`, height: '30rem', width: '100%', backgroundSize: 'cover', display: 'flex', textAlign: 'center', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} >
            <h2 style={{ margin: '15rem 0', width: '100%', backgroundColor: '#dddddd44'}}>{props.stateName}</h2>
        </div>
    );
}
