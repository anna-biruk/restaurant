import React from 'react';
import {Route, Switch} from "react-router-dom";
import {MainPage, CartPage, HomePage, OrderPage} from '../pages';
import 'antd/dist/antd.css';
import CheckoutModal from '../checkoutModal';

        const App = () => {

            return (
                <div  className="app">
                    <Switch>
                        <Route path="/menu">
                            <MainPage/>
                        </Route>
                        <Route path="/cart">
                            <CartPage/>
                        </Route>
                        <Route path='/order'>
                            <OrderPage/>
                        </Route>
                        <Route path='/'>
                            <HomePage/>
                        </Route>
                    </Switch>
                    <CheckoutModal />
                </div>
            )
        };

        export default App;