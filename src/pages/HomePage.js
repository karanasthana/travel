import React from 'react';
import CountriesSection from "../Views/CountriesSection";
import India from '../staticData/countryData/india.json';
import Singapore from '../staticData/countryData/singapore.json';
import Quote from '../Views/Quote';
import Slider from '../Views/Slider';

export default function HomePage() {
    return (
        <div>
            <CountriesSection json={India} />
            <Quote quote={'Live with no excuses and travel with no regrets'}/>
            <CountriesSection json={Singapore} />
            <Quote quote={'The World is a book and those who do not travel read only a page'}/>
            <Slider />      
        </div>
    )
}