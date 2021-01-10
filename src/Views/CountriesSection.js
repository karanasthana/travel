import React from 'react';
import './../css/CountriesSection.css';
import { Link } from 'react-router-dom';
import * as _ from 'lodash';

export default class CountriesSection extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
      const items = this.props.json.places.map((item, key) =>
      _.isEmpty(item.id) ? 
      <div className="card-sm" style={{backgroundImage: `url(${item.picture})`}}>
        {
          item.place ? 
          <p className="card__text-sm">{`${item.place}`}</p> : 
          null
        }
        <h1 className="card__text-lg">{`${item.name}`}</h1>
      </div> :
      <Link to={{pathname: `/travel/states/:${item.id}`, id:`${item.id}`, name: `${item.name}` }} id={item.id} className="card-sm" style={{backgroundImage: `url(${item.picture})`}}>
        {
          item.place ? 
          <div style={{display: 'flex'}}>
            <p className="card__text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="10" height="10" style={{ backgroundColor: 'white' }}><path fill="none" d="M0 0h24v24H0z"/><path d="M17 17h5v2h-3v3h-2v-5zM7 7H2V5h3V2h2v5zm11.364 8.536L16.95 14.12l1.414-1.414a5 5 0 1 0-7.071-7.071L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 0 1 9.9 9.9l-1.415 1.414zm-2.828 2.828l-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z"/></svg>
              {`${item.place}`}
            </p>
          </div> : 
          null
        }
        <h1 className="card__text-lg">{`${item.name}`}</h1>
      </Link>
      );
        return (
            <div className="main main-div" style={{backgroundImage: `url(${this.props.json.picture})` }}>
              <section className="card-lg__container">
                <p className="card__text-sm">{`${this.props.json.countryText}`}</p>
                <h1 className="card__text-lg">{`${this.props.json.countryName}`}</h1>
              {/* <p className="card__text-md">something something</p> */}
              </section>
              <section className="card-sm__container">
                {items}
              </section>
            </div>
        )
    }
}