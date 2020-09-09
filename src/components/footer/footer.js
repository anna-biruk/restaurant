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
                    <Link to='/'> <span className="footer__title">About Bigoli</span></Link>
                    <span className="footer__title">Number: +375291234567</span>
                    <span className="footer__follow">Follow</span>
                    <Link to='/'><FontAwesomeIcon className='footer__icon' icon={faInstagramSquare}/></Link>
                    <Link  to='/'> <FontAwesomeIcon className='footer__icon' icon={faFacebook}/> </Link>
                    <Link  to='/'> <FontAwesomeIcon className='footer__icon' icon={faTwitter}/> </Link>
                    <Link  to='/'><FontAwesomeIcon className='footer__icon' icon={faTelegram}/> </Link>
                </div>
            </footer>
        )
    }

}