import React from 'react';
import './../css/CountriesSection.css';
import { Link } from 'react-router-dom';

export default class CountriesSection extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
      const items = this.props.json.places.map((item, key) =>
      <Link to={{pathname: `/travel/states/:${item.id}`, id:`${item.id}`, name: `${item.name}` }} id={item.id} className="card-sm" style={{backgroundImage: `url(${item.picture})`}}>
        {
          item.place ? 
          <p className="card__text-sm">{`${item.place}`}</p> : 
          null
        }
        <h1 className="card__text-lg">{`${item.name}`}</h1>
      </Link>
      );
        return (
            <div className="main main-div" style={{backgroundImage: `url(${this.props.json.picture})` }}>
              <section className="card-lg__container">
                <p className="card__text-sm">{`${this.props.json.countryName}`}</p>
                <h1 className="card__text-lg">{`${this.props.json.countryText}`}</h1>
              {/* <p className="card__text-md">something something</p> */}
              </section>
              <section className="card-sm__container">
                {items}
              </section>
            </div>
        )
    }
}