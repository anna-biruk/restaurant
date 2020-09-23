import React from 'react';
import {useHistory} from 'react-router-dom';
import {Menu, PageHeader} from 'antd';
import OrderList from "../orderList/orderList";
import './admin-page.scss';
import AdminMenu from "../adminMenu";


const AdminPage = () => {
    const history = useHistory();
    const navigateToMenu = () => {
        history.push('/admin/menu')
    };
    const navigateToOrders = () => {
        history.push('/admin')
    };
    return (
        <>
            <PageHeader
                className="site-page-header"
                onBack={navigateToOrders}
                title="Admin Panel"
                subTitle={
                    <Menu mode="horizontal">
                        <Menu.Item>
                            <a target="_blank" rel="noopener noreferrer" onClick={navigateToOrders}>
                               Orders
                            </a>
                        </Menu.Item>
                        <Menu.Item>
                            <a target="_blank" rel="noopener noreferrer" onClick={navigateToMenu}>
                                Menu
                            </a>
                        </Menu.Item>
                    </Menu>}
            />
            <OrderList/>


        </>

    )

};

export default AdminPage;