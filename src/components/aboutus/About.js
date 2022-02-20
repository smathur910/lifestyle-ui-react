import React from 'react';
import './About.css'
import about from '../../assets/about.png';

import { library } from '@fortawesome/fontawesome-svg-core'

import { faCheckSquare, faCoffee , faLongArrowAltRight  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faCheckSquare, faCoffee, faLongArrowAltRight)          

const About = () => {
  return(
    <div className='container-fluid aboutus'>
        <div className='contant-section'>
        <div className='linever'></div>
        <h1 className='text-center py-5'>About Homelife</h1>
      </div>

        <div className='container'>
        <div className='row'>
                <div className='col-md-6'>
                    <img src={about} className="img-fluid rounded-start"/>
                </div>
                <div className='col-md-6'>
                   <div className='containt-about'>
                       <p>The interior style is an in-depth idea embodied in the interior, a message addressed to each guest of your home.</p>
                       <p>Homelife - a high level of quality work. We create furniture products according to individual projects of designers, and impeccable restoration work will breathe new life into furniture.</p>
                       <p>Our furniture will last for years, creating a unique atmosphere of comfort and rging a good mood throughout the day. We can change familiar objects beyond recognition.</p>
                       <p>Refining of furniture with exclusive deta ils with the author's approach of designers will turn standard furniture into an object af pride, refined and sophisticated interior details.</p>
                     
                   </div>
                   <div className='morebtn pt-3'>
                        <button type="button" class="btn btn-primary">More
                        <FontAwesomeIcon icon="long-arrow-alt-right" />
                        </button>
                        </div>
                </div>
            </div>
        </div>

    </div>
  );
};

export default About;
