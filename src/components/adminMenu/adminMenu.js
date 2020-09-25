import React from 'react';
import {useHistory} from 'react-router-dom';
import {Menu, PageHeader, Tabs} from 'antd';
import CreateMenu from "../createMenu";
import RedactMenu from "../redactMenu";

import './adminMenu.scss';

const {TabPane} = Tabs;

const AdminMenu = () => {
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
                className="admin-menu__header"
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
            <div className="admin-menu__tabs">
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Create" key="1">
                        <CreateMenu/>
                    </TabPane>
                    <TabPane tab="Redact menu" key="2">
                        <RedactMenu/>
                    </TabPane>
                </Tabs>
            </div>
        </>
    )
};

export default AdminMenu;