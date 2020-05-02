import React from 'react';
import Karan1 from '../Assets/slickSlider/karan1.jpg';
import './../css/CountriesSection.css';

export default class CountriesSection extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div class="main main-div">
  <section class="card-lg__container">
       <p class="card__text-sm">Sierra Desert - Morocco</p>
      <h1 class="card__text-lg">Marrakech Merzouga</h1>
    <p class="card__text-md">Duis aute irure dolor in reprehenderit in voluptate nulla pariatur.</p>
    <a href="#" class="card__btn">Discover Location</a>
    </section>
  
  
  <section class="card-sm__container">
    <section class="card-sm" style={{backgroundImage: `url('https://images.unsplash.com/photo-1584962356612-f7092400e895?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`}}>
      <p class="card__text-sm">Tanifa - Spain</p>
      <h1 class="card__text-lg">Los Lances Beach</h1>
    </section>

    <section class="card-sm" style={{backgroundImage: `url('https://images.unsplash.com/photo-1489823480956-0204142cfebd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`, backgroundPosition: 'center right' }}>
      <p class="card__text-sm">Japan Alps</p>
      <h1 class="card__text-lg">Nagano Prefecture</h1>
    </section>

    {/* <section class="card-sm" style="background-image: url('https://images.unsplash.com/photo-1527549993586-dff825b37782?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')">
      <p class="card__text-sm">Sierra Nevada - USA</p>
      <h1 class="card__text-lg">Yosemite National  </h1>
    </section>

    <section class="card-sm" style="background-image: url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')">
      <p class="card__text-sm">Cappadocia - Turkey</p>
      <h1 class="card__text-lg">Goreme &nbsp; Valley</h1>
    </section> */}
</section>
</div>
        )
    }
}