import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {Button, Form, Input, Select} from 'antd';
import {checkout, saveOrder} from "../../actions";
import './orderForm.scss';
import {connect} from "react-redux";

const {Option} = Select;
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 8,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const OrderForm = ({order, saveOrder}) => {
    const [form] = Form.useForm();

    useEffect(()=> {
        form.setFieldsValue(order);
    }, [form, order]);

    const handleSubmit = (formData) => {
      saveOrder(formData)
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle >
            <Select defaultValue="+375" style={{width: 100}} >
                <Option value="+375">+375</Option>
                <Option value="+1">+1</Option>
                <Option value="+7">+7</Option>
            </Select>
        </Form.Item>
    );

    return (
            <div className="form-container">
                <Form {...layout} form={form} name='order-form' className='order-form' onFinish={handleSubmit}>
                    <Form.Item name="name" label='Name'
                               rules={[{required: true, message: 'Please input your name!'}]}>
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        label="Phone Number"
                        rules={[{required: true, message: 'Please input your phone number!'}]}
                    >
                        <Input addonBefore={prefixSelector} style={{width: '100%'}}/>
                    </Form.Item>
                    <Form.Item name='email' label='Email'>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="address" label='Address'
                               rules={[{required: true, message: 'Please input your address!'}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name={['user', 'Note']} label="Note">
                        <Input.TextArea/>
                    </Form.Item>

                    <Form.Item
                        name="payment"
                        label="Payment method"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select
                            placeholder="Select a form of payment"
                            allowClear
                        >
                            <Option value="cash">Cash</Option>
                            <Option value="card">By card to the courier</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="checkout" onSubmit={checkout}>
                            Checkout
                        </Button>
                        <Link to='/menu'> <Button htmlType="button">
                            Back
                        </Button></Link>
                    </Form.Item>

                </Form>
            </div>

    )
};

const mapStateToProps = (state) => {
    return {
        order: state.menuReducer.order

    }
};
const mapDispatchToProps =(dispatch)=> {
    return{
        saveOrder:(data)=>dispatch(saveOrder(data)),
        checkout:()=>dispatch(checkout())

    }
};


export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);