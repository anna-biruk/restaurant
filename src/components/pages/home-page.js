import React, {Component} from 'react';
import './home-page.scss'
import Slider from '../slider'
import Post from '../post';
import AppHeader from "../app-header";
import About from "../about";
import Footer from "../footer";
import Map from "../map";

export default class HomePage extends Component {
            render() {
                return (
                    <div className="home-page"  >
                       <div className="home-page__header">
                           <AppHeader total={50}/>
                       </div>

                        <Slider/>

                        <div className='home-page__posts'>
                            <Post img='images/fondan.jpg' alt='img' title='Chocolate fondan' content=' '/>
                            <div className='home-page_post-container'>
                                <Post className="home-page__post" img='menu/salads/6.jpg' alt='img'
                                      title='Cesar Salad' content=''/>
                                <Post className="home-page__post" img='menu/main dishes/1.jpg' alt='img'
                                      title='Grilled beef tenderloin' content=''/>
                            </div>
                        </div>
                        <div className="home-page__about">
                            <About/>
                        </div>
                        <Map />
                            <Footer/>
                    </div>
                )
            }

        }