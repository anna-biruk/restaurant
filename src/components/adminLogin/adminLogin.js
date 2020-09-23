import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {Form, Input, Button, Checkbox, Alert} from 'antd';
import './adminLogin.scss'
import {signIn} from "../../actions/signInActions";
import {connect} from "react-redux";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const AdminLogin = ({signIn, model, error}) => {
    const history = useHistory();
    useEffect(() => {
        if (model) {
            history.push('/admin');
        }
    }, [model, history]);

    const onFinish = (values) => {
        console.log('Success:', values);
        signIn(values.login, values.password);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='adminLogin-container'>
            <Form className='adminLogin-container__form'
                  {...layout}
                  name="basic"
                  initialValues={{
                      remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Login"
                    name="login"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your login!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
                {
                    error ? <Alert message={error} type="error"/> : null
                }
            </Form>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        model: state.signIn.model,
        error: state.signIn.error
    }

};
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (login, password) => dispatch(signIn(login, password)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);