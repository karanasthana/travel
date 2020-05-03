import React from 'react';
import Quote from '../Views/Quote';
import StatePicture from '../Views/StatePicture';

export default function StatesPage(props) {
    return (
        <div>
            <StatePicture image={props.json.picture} stateName={props.json.name} />
            <Quote quote={props.json.text}/>
        </div>
    )
}