import React, {useState} from 'react';
import {Upload} from 'antd';
import ImgCrop from 'antd-img-crop';

const ImageUpload = ({onFileStateChange}) => {
    const [fileList, setFileList] = useState([]);

    const getSource = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        return src;
    };

    const onChange = async ({fileList: newFileList}) => {
        const file = newFileList[0] || null;
        if (file) {
            const src = await getSource(newFileList[0]);
            onFileStateChange(src);
        } else {
            onFileStateChange(null);
        }

        setFileList(newFileList);
    };

    const onPreview = async file => {
        const src = await getSource(file);
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow.document.write(image.outerHTML);
    };

    return (
        <ImgCrop rotate>
            <Upload
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
            >
                {fileList.length < 1 && '+ Upload'}
            </Upload>
        </ImgCrop>
    );
};

export default ImageUpload;