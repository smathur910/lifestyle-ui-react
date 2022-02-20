import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter ,faTelegram } from '@fortawesome/free-brands-svg-icons'
library.add(faFacebook,faTwitter,faTelegram)          

const Footer = () => {
  return (
    <div className='container-fluid footer'>

        <div className='row backgrnd-footer'>
      <div className='col-md-4'>
                  <div className='contact-info text-center'>
                  
                    <h5>Contacts</h5>
                    <div className='separate'>
                      <div class="linever"></div>
                  
                    </div>
                    <div className='footer-contact'>
                    <p>+38(063)432-34-56</p>
                    <p>info.gmail.com </p>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>            
                <div className='row d-flex flex-column'>
                  <div className='col-12'>
                    <div className='row justify-content-center'>
                    <img src={logo}/>

                    </div>
                  </div>
                  <div className='col-12'>
                    <ul className='footer-menu d-flex justify-content-between'>
                      <li>About Company</li>
                      <li>Service</li>
                      <li>Gallery</li>
                      <li>Contacts</li>
                    </ul>
                  </div>
                </div>
                </div>
          
                <div className='col-md-4'>
                <div className='contact-info text-center'>
                     <h5>We are in <br></br>social networks</h5>
                       <div className='separate'>
                        <div class="linever"></div>
                      </div>
                      <div className='social-media'>
                      <FontAwesomeIcon icon={faFacebook} />
                      <FontAwesomeIcon icon={faTwitter} />
                      <FontAwesomeIcon icon={faTelegram} />
                      </div>
                </div>
                 </div>
               
        </div>
    
    </div>
   
  )
}

export default Footer