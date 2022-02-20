import React from 'react';
import './Benefits.css';
import icon1 from '../../assets/ic-1.png';
import icon2 from '../../assets/ic-2.png';
import icon3 from '../../assets/ic-3.png';

const Benefits = () => {
  return (
    <div className='container-fluid benefits'>
      <div className='contant-section'>
        <div className='linever'></div>
        <h1 className='text-center py-5'>Benefits Homelife</h1>
      </div>
      <div className='row'>
      <div class="card-group">
        <div className="card align-items-center">
          <img src={icon1} className="card-img-top"/>
          <div className="card-body text-center">
            <h5 className="card-title">Individuality</h5>
            <p className="card-text">Your turmture intenor IS a retlectlon
            of your taste, so we have an individual
            approach to customer needs.</p>
          </div>
  
        </div>
        <div className="card align-items-center">
        <img src={icon2} className="card-img-top"/>
          <div className="card-body text-center">
            <h5 className="card-title">Ecological materials</h5>
            <p className="card-text">We offer a large selection ot
            ecological furniture made from
            quality, clean materials.</p>
          </div>
        
        </div>
        <div className="card align-items-center">
        <img src={icon3} className="card-img-top"/>
          <div className="card-body text-center">
            <h5 className="card-title">Emphasis on design and quality</h5>
            <p className="card-text">Design and manufacture of quality
            furniture with an innovative and
            individual design for you.
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
    );
};

export default Benefits;
