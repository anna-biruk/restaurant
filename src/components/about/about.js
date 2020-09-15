import React, {Component} from 'react';
import './about.scss'

export default class About extends Component {
    render() {
        return (
            <div className="about-page">
                <div className="about-page__image-container">
                    <img className='about-page__image' src="images/restjpg.jpg" alt="rest"/>
                    <img className='about-page__image' src="images/rest2.jpg" alt="rest"/>
                    <img className='about-page__image' src="images/rest3.jpeg" alt="rest"/>
                </div>
                <div className="about-page__descr">
                    Bigoli is a classic restaurant with excellent service, cozy interior and intimate atmosphere.
                    The menu contains simple and understandable dishes of European cuisine.This is the place where taste
                    is born, where gastronomic fashion is set, where every dinner turns into an unforgettable event.
                    Bigoli has everything to make your gastronomic dreams come true and give a unique time and vivid
                    emotions in a special atmosphere.
                </div>
            </div>
        )
    }
}