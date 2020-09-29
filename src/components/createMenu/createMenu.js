import React, {useEffect, useState} from 'react';
import {Alert, Button, Form, Input, InputNumber, Select} from 'antd';
import ImageUpload from "../imageUpload/ImageUpload";
import {clearCreateForm, saveMenuItem} from "../../actions";
import {connect} from "react-redux";

import './createMenu.scss';

const CreateMenu = ({saveMenuItem, clearCreateForm, error, model}) => {
    const [form] = Form.useForm();
    useEffect(() => {
        clearCreateForm();
    }, [clearCreateForm]);

    useEffect(() => {
        if (model) {
            form.setFieldsValue({
                title: "",
                price: "",
                category: ""
            })
        }
    }, [model, form]);

    const [componentSize, setComponentSize] = useState('default');
    const [image, setImage] = useState(null);

    const onFormLayoutChange = ({size}) => {
        setComponentSize(size);
    };

    const handleImageChange = (newImage) => {
        setImage(newImage);
    };

    const handleSubmit = (data) => {
        saveMenuItem({...data, url: image})
    };

    return (
        <>
            <Form
                form={form}
                labelCol={{span: 4}}
                wrapperCol={{span: 14}}
                layout="horizontal"
                initialValues={{size: componentSize}}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
                onFinish={handleSubmit}
            >
                <Form.Item name="title" label="Title">
                    <Input placeholder='title'/>
                </Form.Item>
                <Form.Item name="price" label="Price">
                    <InputNumber
                        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={value => value.replace(/\$\s?|(,*)/g, '')}

                    />
                </Form.Item>
                <Form.Item name="category" label="Select category">
                    <Select>
                        <Select.Option value="breakfast">Breakfast</Select.Option>
                        <Select.Option value="main dishes">Main dishes</Select.Option>
                        <Select.Option value="salads">Salads</Select.Option>
                        <Select.Option value="desserts">Desserts</Select.Option>
                        <Select.Option value="drinks">Drinks</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item className="createMenu__center">
                    <ImageUpload onFileStateChange={handleImageChange}/>
                </Form.Item>
                <Form.Item className="createMenu__center">
                    <Button className="createMenu__submit" type="primary" htmlType="submit">
                        Create
                    </Button>
                </Form.Item>
                <Form.Item>
                    {error && <Alert message="Failed to create menu item" type="error"/>}
                    {model && <Alert message="Created successfully" type="success"/>}

                </Form.Item>
            </Form>
        </>
    )

};

const mapStateToProps = (state) => {
    return {
        menuItem: state.menuReducer.menuItem,
        model: state.createForm.model,
        error: state.createForm.error

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveMenuItem: (data) => dispatch(saveMenuItem(data)),
        clearCreateForm: () => dispatch(clearCreateForm())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateMenu);