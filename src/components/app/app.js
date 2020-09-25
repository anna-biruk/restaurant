import React from 'react';
import {Route, Switch} from "react-router-dom";
import {MainPage, CartPage, HomePage, OrderPage, LoginPage} from '../pages';
import 'antd/dist/antd.css';
import CheckoutModal from '../checkoutModal';
import AdminPage from "../pages/admin-page";
import AdminMenu from "../adminMenu";
import EditMenuPage from "../editMenuPage";
import OrderStatusPage from "../ordetStatusPage";

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
                        <Route path='/order/:id'>
                            <OrderStatusPage/>
                        </Route>
                        <Route path='/order'>
                            <OrderPage/>
                        </Route>

                        <Route path='/admin/login'>
                            <LoginPage/>
                        </Route>

                        <Route path='/admin/menu/:id'>
                            <EditMenuPage/>
                        </Route>

                        <Route path='/admin/menu'>
                            <AdminMenu/>
                        </Route>
                        <Route path='/admin'>
                            <AdminPage/>
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