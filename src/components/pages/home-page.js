import React, {Component} from 'react';
import './home-page.scss'
import Slider from '../slider'
import Post from '../post';

export default class HomePage extends Component {

    render() {
        return (
            <div className="home-page"  >

                <Slider/>

                <div className='home-page__posts'>
                    <Post img='images/chick.jpg' alt='img' title='Chicken' content='LoremIpsum'/>
                    <div className='home-page_post-container'>
                        <Post className="home-page__post" img='images/2.jpg' alt='img' title='Chicken' content='LoremIpsum'/>
                        <Post className="home-page__post" img='images/des.jpg' alt='img' title='Chicken' content='LoremIpsum'/>
                    </div>
                </div>

            </div>
        )
    }

}