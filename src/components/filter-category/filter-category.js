import React, {Component} from 'react';
import './filter-category.scss';
import {connect} from "react-redux";
import classNames from 'classnames';
import {changeCategory} from "../../actions";

class FilterCategory extends Component {
    categories = [
        'BREAKFAST',
        'MAIN DISHES',
        'SALADS',
        'DESSERTS',
        'DRINKS'
    ];

    render() {
        return (
            <div className='filter-container'>
                {
                    this.categories.map((item) => {
                        return (
                            <button onClick={()=> this.props.changeCategory(item)} className={classNames('filter-container__item',
                                {'filter-container__item_active':this.props.category === item})}>
                                {item}
                            </button>

                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        category: state.menuReducer.category,

    }
};
const mapDispatchToProps = {
    changeCategory,

};

export default connect(mapStateToProps, mapDispatchToProps)(FilterCategory);