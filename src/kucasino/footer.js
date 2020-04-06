import React, { Component } from 'react';
import '../css/footer.css'

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className="row">
                    <div className="col-4">
                        <i className="fa fa-gift" aria-hidden="true"></i>
                        <span>Ưu Đãi</span>
                    </div>
                    <div className="col-4">
                        <i className="fa fa-money" aria-hidden="true"></i>
                        <span>Thanh Toán</span>
                    </div>
                    <div className="col-4">
                        <i className="fa fa-phone-square" aria-hidden="true"></i>
                        <span>Hỗ Trợ</span>
                    </div>
                </div>
                <div className="text_cp">Copyright © 2020 NghiaLT</div>
                <a href="#top" id="myBtn" className="fa fa-4x fa-angle-up"> </a>
            </div >
        );
    }
}

export default Footer