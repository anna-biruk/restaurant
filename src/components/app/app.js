import React from 'react';
import {Route, Switch} from "react-router-dom";
import {MainPage, CartPage,HomePage} from '../pages';
import AppHeader from '../app-header';

const App = () => {

    return (
        <div  className="app">
            <AppHeader total={50}/>
            <Switch>
                <Route path="/menu">
                    <MainPage/>
                </Route>
                <Route path="/cart">
                    <CartPage/>
                </Route>
                <Route path='/'>
                    <HomePage/>
                </Route>
            </Switch>
        </div>
    )
}

export default App;