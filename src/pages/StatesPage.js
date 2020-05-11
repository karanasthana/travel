import React from 'react';
import Quote from '../Views/Quote';
import StatePicture from '../Views/StatePicture';
import StatePlace from '../Views/StatePlace';

export default function StatesPage(props) {
    const places = props.json.places.map((item, key) => 
        <StatePlace picture={`${item.picture}`} place={`${item.place}`} key={key} />
    );
    return (
        <div>
            <StatePicture image={props.json.picture} stateName={props.json.name} />
            <Quote quote={props.json.text}/>
            <div>
                {places}
            </div>
        </div>
    )
}