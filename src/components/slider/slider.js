import React,{Component} from 'react';
import {Fade} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './slider.scss';
export default class Slider extends Component{
    render() {
        const images = [
            'images/salad.jpg',
            'images/salad1.jpg',
            'images/salad2.jpg',
            'images/pizza2.jpg',
            'images/steak.jpg'
        ];

        return (
            <div className="slider-page">
                <Fade>
                    {
                        images.map(item => {
                            return (
                                <div className="each-fade">
                                    <div className="slider-page__image-container">
                                        <img src={item} className="slider-page__image" alt=""/>
                                    </div>

                                </div>
                            )
                        })
                    }
                </Fade>
            </div>
        )


    }

}