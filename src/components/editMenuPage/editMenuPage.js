import React from 'react';
import {useHistory} from 'react-router-dom';
import CreateMenu from "../createMenu/createMenu";
import {Menu, PageHeader} from "antd";


const EditMenuPage = () => {
    const history = useHistory();
    const navigateToMenu = () => {
        history.push('/admin/menu')
    };
    const navigateToOrders = () => {
        history.push('/admin')
    };
    return (
        <div>
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
            <CreateMenu/>
        </div>
    )
};

export default EditMenuPage;