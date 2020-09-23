import React from 'react';
import {Spin} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';

const Spinner = () => {
    const antIcon = <LoadingOutlined style={{fontSize: 30,color:"white", display:"block", margin:'0 auto',width:'1500px'}} spin/>;
    return <Spin indicator={antIcon}/>;
};

export default Spinner;