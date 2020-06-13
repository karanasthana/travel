import React from 'react';
import Quote from '../Views/Quote';
import StatePicture from '../Views/StatePicture';
import StatePlace from '../Views/StatePlace';

export default function StatesPage(props) {
    console.log("The page is --> " + props.location.id);
    debugger;
    let json = require(`../staticData/statesData/${props.match.params.id.substr(1)}.json`)
    const places = json.places.map((item, key) => 
        <StatePlace picture={`${item.picture}`} place={`${item.place}`} key={key} />
    );
    return (
        <div>
            <StatePicture image={json.picture} stateName={json.name} />
            <Quote quote={json.text}/>
            <div>
                {places}
            </div>
        </div>
    )
}