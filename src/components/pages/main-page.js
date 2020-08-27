import React from 'react';
import MenuList from '../menu-list';
import './main-page.scss';
import AppHeader from "../app-header";

const MainPage = () => {
    return (

        <div className="main-page">
            <AppHeader total={50}/>

            <MenuList/>

        </div>
    )
}

export default MainPage;
