import React from 'react';
import MenuList from '../menu-list';
import './main-page.scss';
import AppHeader from "../app-header";
import Footer from "../footer";

    const MainPage = () => {
        return (
            <div className="main-page">
                <AppHeader total={50}/>
                <MenuList/>
                <Footer/>
            </div>
        )
    };

    export default MainPage;
