import React from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import MenuList from "../menu-list/menu-list";
import "./redactMenu.scss"


const RedactMenu = () => {
    const history = useHistory();
    const handleItemClick = (id) => {
        console.log({id});
        history.push(`/admin/menu/${id}`);
    };

    return (
        <div className='redactMenu-container'>
            <MenuList isAdmin={true} onEditClick={handleItemClick}/>
        </div>
    )

};

export default RedactMenu;