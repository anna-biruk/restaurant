import React from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {Menu, PageHeader} from "antd";
import EditMenu from "../editMenu/editMenu";


const EditMenuPage = () => {
    const history = useHistory();
    const params = useParams();
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
            <EditMenu itemId={Number.parseInt(params.id)}/>
        </div>
    )
};

export default EditMenuPage;