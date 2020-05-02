import React from 'react';
import './../css/CountriesSection.css';
import background from '../Assets/himachal-background.jpg'
import himachal from '../Assets/himachal-card.jpg'
import rajasthan from '../Assets/rajasthan-card.jpg'
import uttarakhand from '../Assets/uttarakhand-card.jpg'
import goa from '../Assets/goa-card.jpg'
import punjab from '../Assets/punjab-card.jpg'
import up from '../Assets/up-card.jpg'

export default class CountriesSection extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div class="main main-div" style={{backgroundImage: `url(${background})` }}>
  <section class="card-lg__container">
       <p class="card__text-sm">India</p>
      <h1 class="card__text-lg">The land of landscapes</h1>
    <p class="card__text-md">something something</p>
    {/* <a href="#" class="card__btn">Discover Location</a> */}
    </section>
  
  
  <section class="card-sm__container">
  <section class="card-sm" style={{backgroundImage: `url(${himachal})`}}>
      <p class="card__text-sm">Manali</p>
      <h1 class="card__text-lg">Himachal</h1>
    </section>
    <section class="card-sm" style={{backgroundImage: `url(${rajasthan})`}}>
      <p class="card__text-sm">Udaipur</p>
      <h1 class="card__text-lg">Rajasthan</h1>
    </section>
    <section class="card-sm" style={{backgroundImage: `url(${uttarakhand})`}}>
      <p class="card__text-sm">Nag Tibba</p>
      <h1 class="card__text-lg">Uttarakhand</h1>
    </section>
    <section class="card-sm" style={{backgroundImage: `url(${goa})`}}>
      <p class="card__text-sm">Candolim</p>
      <h1 class="card__text-lg">Goa</h1>
    </section>
    <section class="card-sm" style={{backgroundImage: `url(${punjab})`}}>
      <p class="card__text-sm">Amritsar</p>
      <h1 class="card__text-lg">Punjab</h1>
    </section>
    <section class="card-sm" style={{backgroundImage: `url(${up})`}}>
      <p class="card__text-sm">Bareilly</p>
      <h1 class="card__text-lg">UP</h1>
    </section>

    {/* <section class="card-sm" style={{backgroundImage: `url('https://images.unsplash.com/photo-1489823480956-0204142cfebd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`, backgroundPosition: 'center right' }}>
      <p class="card__text-sm">Japan Alps</p>
      <h1 class="card__text-lg">Nagano Prefecture</h1>
    </section> */}

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