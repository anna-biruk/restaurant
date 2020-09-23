import React, {useState} from 'react';
import {Button, Form, Input, InputNumber, Select} from 'antd';
import ImageUpload from "../imageUpload/ImageUpload";
import {saveMenuItem} from "../../actions";
import {connect} from "react-redux";


const CreateMenu = ({saveMenuItem}) => {

    const [componentSize, setComponentSize] = useState('default');
    const [image, setImage] = useState(null);

    const onFormLayoutChange = ({size}) => {
        setComponentSize(size);
    };

    const handleImageChange = (newImage) => {
        setImage(newImage);
    };

    const handleSubmit = (data) => {
        debugger
        saveMenuItem({...data,url:image})
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
                <Form.Item name="category" label="Select category" >
                    <Select >
                        <Select.Option value="breakfast">Breakfast</Select.Option>
                        <Select.Option value="main dishes">Main dishes</Select.Option>
                        <Select.Option value="salads">Salads</Select.Option>
                        <Select.Option value="desserts">Desserts</Select.Option>
                        <Select.Option value="drinks">Drinks</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <ImageUpload onFileStateChange={handleImageChange} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Create
                    </Button>
                </Form.Item>
            </Form>
        </>
    )

};

const  mapStateToProps = (state) => {
    return {
        menuItem: state.menuReducer.menuItem

    }
};

const mapDispatchToProps =(dispatch)=> {
    return{
        saveMenuItem:(data)=>dispatch(saveMenuItem(data)),

    }
};

export default connect(mapStateToProps,mapDispatchToProps) (CreateMenu);