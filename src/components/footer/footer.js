import React, {Component} from 'react';
import './footer.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagramSquare, faTelegram, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {Link} from "react-router-dom";

export default class Footer extends Component {
    render() {
        return (
            <footer className='footer-container'>
                <div className="footer">
                    <span className="footer__title"> Terms and condisions </span>
                    <span className="footer__title">Privacy</span>
                    <span className="footer__follow">Follow</span>

                    <Link><FontAwesomeIcon className='footer__icon' icon={faInstagramSquare}/></Link>
                    <Link> <FontAwesomeIcon className='footer__icon' icon={faFacebook}/> </Link>
                    <Link> <FontAwesomeIcon className='footer__icon' icon={faTwitter}/> </Link>
                    <Link><FontAwesomeIcon className='footer__icon' icon={faTelegram}/> </Link>


                </div>
            </footer>
        )
    }

}