import React from 'react';
import './Header.css';
import img1 from '../../assets/chaery.png'
import img2 from '../../assets/homelife bottom.png'
import img3 from '../../assets/wave.png'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faCheckSquare, faCoffee , faLongArrowAltRight  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faCheckSquare, faCoffee, faLongArrowAltRight)          


const Header = () => {
    return(
        <div className='header'>
        <div className="container">
             <div className="row">
                <div className="col-md-6 col-12"> 
                    <div className='left-section pt-5'>
                        <div className='title-h1'>
                            <h1>The best <span>author's</span> furniture for home</h1>
                        </div>
                        <div className='morebtn pt-3'>
                        <button type="button" class="btn btn-primary">More
                        <FontAwesomeIcon icon="long-arrow-alt-right" />
                        </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <img src={img1}/>
                </div>
            </div>
        </div>
        <div className='container-fluid homelogo'>
             <img src={img2} style={{width: 'inherit'}}/>
        </div>
        <div className='container-fluid homelogo-curve'>
             <img src={img3} style={{width: 'inherit'}}/>
        </div>
        </div>
    )
};

export default Header;
