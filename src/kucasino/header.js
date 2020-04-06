import React, { Component } from 'react';
import { } from 'reactstrap';
import '../css/header.css';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="mb_header">
                    <h1 className="bg_header_name">Xóc Đĩa</h1>
                    <div className="header_R">
                        <a href="/" className="btn_homeRegister fa fa-registered"> Đăng ký</a>
                        <a href="/" className="btn_homeLogin fa fa-sign-in"> Đăng nhập</a>
                    </div>
                </div>
                <div className="dt_header">
                </div>
            </header>
        );
    }
}

export default Header