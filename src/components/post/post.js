import React, {Component} from 'react';
import classnames from 'classnames';

import './post.scss'
export default class Post extends Component {
    render() {
        const {img, alt, title, content, className} = this.props;
        return (
            <div className={classnames("post", className)}>
                <div className="post__image-container">
                    <img src={img} alt={alt} className="post__image"/>
                </div>
                <div className="post__title">
                    {title}
                </div>
                <div className="post__content">
                    {content}
                </div>

            </div>
        )
    }

}