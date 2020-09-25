import React, {useEffect, useState} from 'react';
import {Alert, Button, Form, Input, InputNumber, Select} from 'antd';
import ImageUpload from "../imageUpload/ImageUpload";
import {clearEditForm, updateMenuItem} from "../../actions";
import {connect} from "react-redux";
import './editMenu.scss';


const EditMenu = ({menuItem, updateMenuItem, clearEditForm, model, error}) => {
    const [componentSize, setComponentSize] = useState('default');
    const [image, setImage] = useState(null);
    const [form] = Form.useForm();

    useEffect(() => {
        clearEditForm()
    }, [clearEditForm]);

    useEffect(() => {
        form.setFieldsValue(menuItem);
    }, [form, menuItem]);


    const onFormLayoutChange = ({size}) => {
        setComponentSize(size);
    };

    const handleImageChange = (newImage) => {
        setImage(newImage);
    };

    const handleSubmit = (data) => {
        updateMenuItem({...data, id: menuItem.id})
    };

    return (
        <>
            <Form
                labelCol={{span: 4}}
                wrapperCol={{span: 14}}
                layout="horizontal"
                initialValues={{size: componentSize}}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
                onFinish={handleSubmit}
                form={form}
            >
                <Form.Item name="title" label="Title">
                    <Input value={menuItem && menuItem.title} placeholder='title'/>
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
                <Form.Item>
                    {
                        menuItem ? <div className='editMenu__center'>
                            <ImageUpload isEdit defaultItem={menuItem.url}
                                         onFileStateChange={handleImageChange}/>
                        </div> : null
                    }
                </Form.Item>
                <Form.Item className='editMenu__button'>
                    <Button type="primary" htmlType="submit">
                        Create
                    </Button>
                </Form.Item>
                <Form.Item>
                    {error && <Alert message="Failed to edit menu item" type="error"/>}
                    {model && <Alert message="Updated successfully" type="success"/>}

                </Form.Item>
            </Form>
        </>
    )

};

const mapStateToProps = (state, ownProps) => {
    return {
        menuItem: state.menuReducer.menu.find(item => item.id === ownProps.itemId),
        model: state.editForm.model,
        error: state.editForm.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateMenuItem: (data) => dispatch(updateMenuItem(data)),
        clearEditForm: () => dispatch(clearEditForm())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditMenu);