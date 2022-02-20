import React from 'react';
import './Servicess.css'
import {glimg1, glimg2, glimg3, glimg4} from './imports'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faLongArrowAltRight  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faLongArrowAltRight)          

const Servicess = () => {
  return(
    <div className='container-fluid service'>
      <div className='contant-section'>
        <div className='linever'></div>
        <h1 className='text-center py-5'>Company Services</h1>
      </div>
      <div className='row content-card'>
      <div className='col-md-6'>
        <div className="card">
          <div className="row g-0 leftcard">
            <div className="col-md-4">
              <img src={glimg1} className="img-fluid rounded-start"/>
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title">Furniture for kitchen</h5>
                <p className="card-text">We develop unique kitchen facades and countertops made of durable materials. And also, the abundance of designs and colors of kitchen materials.</p>
                <p className="card-text"><small className="text-muted">More details <FontAwesomeIcon icon="long-arrow-alt-right" /></small></p>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className='col-md-6'>
        <div className="card">
          <div className="row g-0 rightcard">
            <div className="col-md-4">
              <img src={glimg2} className="img-fluid rounded-start"/>
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title">Garniture</h5>
                <p className="card-text">A variety of furniture sets will help you create a stylish and comfortable interior in your home.</p>
                <p className="card-text"><small className="text-muted">More details <FontAwesomeIcon icon="long-arrow-alt-right" /></small></p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className='row content-card second-card'>
      <div className='col-md-6'>
        <div className="card mb-3">
          <div className="row g-0 leftcard">
           
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title">Soft furniture</h5>
                <p className="card-text">We create our own upholstered furniture to order! Choose any style and configuration. Thousands of fabrics and pillow options.</p>
                <p className="card-text"><small className="text-muted">More details <FontAwesomeIcon icon="long-arrow-alt-right" /></small></p>
              </div>
            </div>
            <div className="col-md-4">
              <img src={glimg3} className="img-fluid rounded-start"/>
            </div>
          </div>
        </div>
        </div>

        <div className='col-md-6'>
        <div className="card mb-3">
          <div className="row g-0 rightcard">
            
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title">Furniture for children</h5>
                <p className="card-text">unique, high-quality designer furniture for children. Eco-friendly wooden furniture.</p>
                <p className="card-text"><small className="text-muted">More details <FontAwesomeIcon icon="long-arrow-alt-right" /></small></p>
              </div>
            </div>
            <div className="col-md-4">
              <img src={glimg4} className="img-fluid rounded-start"/>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>
    );
};

export default Servicess;
