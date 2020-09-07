import React,{Component} from 'react';
import {Fade} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './slider.scss';
export default class Slider extends Component{
    render() {
        const images = [
            'images/1 (2).jpg',
            'images/3.jpg',
            'images/3.jpeg',
            'images/5.jpg',
            'images/7.jpeg'
        ];

        return (
            <div className="slider-page">
                <Fade>
                    {
                        images.map(item => {
                            return (
                                <div key={item} className="each-fade">
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