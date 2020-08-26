import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from "react-redux";
import './menu-list.scss';
import WithRestoService from '../hoc/with-resto-service'
import {addedToCart, menuError, menuLoaded, menuRequested} from "../../actions";
import Spinner from '../spinner/spinner'
import Error from '../error/error';
import FilterCategory from "../filter-category";

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
        const {menuItems, loading, error, addedToCart, category} = this.props;
        if (loading) {
            return <Spinner/>
        }

        if (error) {
            console.error(error);
            return <Error/>
        }
        const filterItems = menuItems.filter(item => category === null || category === item.category.toUpperCase())
        return (
            <div>
                <div className='menu-list__title'>Our menu</div>
                <FilterCategory/>
                <ul className="menu__list">
                    {filterItems.map(menuItem => {
                        return <MenuListItem
                            key={menuItem.id}
                            menuItem={menuItem}
                            onAddToCart={() => {
                                addedToCart(menuItem.id)
                            }}/>
                    })}

                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error,
        category: state.category
    }
};
const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCart
};
export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));