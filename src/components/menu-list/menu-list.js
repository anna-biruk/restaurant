import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from "react-redux";
import './menu-list.scss';
import WithRestoService from '../hoc/with-resto-service'
import {menuLoaded, menuRequested, menuError, addedToCart} from "../../actions";
import Spinner from '../spinner/spinner'
import Error from '../error/error';

class MenuList extends Component {
    componentDidMount() {
        this.props.menuRequested();

        const {RestoService} = this.props;
        RestoService.getMenuItems()
            .then(res => this.props.menuLoaded(res)).catch((error) => {
            console.error(error);
            this.props.menuError();
        });
    }

    render() {
        const {menuItems, loading, error, addedToCart} = this.props;
        if (loading) {
            return <Spinner/>
        }

        if (error) {
            console.error(error);
            return <Error/>
        }

        return (
            <ul className="menu__list">
                {menuItems.map(menuItem => {
                    return <MenuListItem
                        key={menuItem.id}
                        menuItem={menuItem}
                        onAddToCart={() => {
                            addedToCart(menuItem.id)
                        }}/>
                })}

            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
};
const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCart
};
export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));