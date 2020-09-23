import React, {Component} from 'react';
import AdminLogin from "../adminLogin";
import './login-page.scss';
import Footer from "../footer";


export default class LoginPage extends Component {
    render() {
        return (
            <>
                <div className="login-page">
                    <AdminLogin/>
                </div>
                <Footer/>
            </>

        )

    }

}