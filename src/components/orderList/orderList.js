import React, {Component} from 'react';
import {getOrders} from "../../actions/orderActions";
import {connect} from "react-redux";
import OrderItem from "../orderItem";


class OrderList extends Component {
    componentDidMount() {
        this.props.getOrders();
    }

    render() {
        const {orders} = this.props;
        return (
            <div>
                <ul className='order-list'>
                    {orders && orders.map(orderItem => {
                        return <OrderItem
                            key={orderItem.id}
                            orderItem={orderItem}
                        />
                    })}
                </ul>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        orders: state.orders.orders
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getOrders: () => dispatch(getOrders())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(OrderList)