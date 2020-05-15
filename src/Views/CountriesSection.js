import React from 'react';
import './../css/CountriesSection.css';
import { Link } from 'react-router-dom';

export default class CountriesSection extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
      const items = this.props.json.places.map((item, key) =>
      <Link to="/states" class="card-sm" style={{backgroundImage: `url(${item.picture})`}}>
        {
          item.place ? 
          <p class="card__text-sm">{`${item.place}`}</p> : 
          null
        }
        <h1 class="card__text-lg">{`${item.name}`}</h1>
      </Link>
      );
        return (
            <div class="main main-div" style={{backgroundImage: `url(${this.props.json.picture})` }}>
              <section class="card-lg__container">
                <p class="card__text-sm">{`${this.props.json.countryName}`}</p>
                <h1 class="card__text-lg">{`${this.props.json.countryText}`}</h1>
              {/* <p class="card__text-md">something something</p> */}
              </section>
              <section class="card-sm__container">
                {items}
              </section>
            </div>
        )
    }
}