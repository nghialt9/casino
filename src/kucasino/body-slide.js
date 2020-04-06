import React, { Component } from 'react';

class BodySlide extends Component {
    render() {
        return (
            <div id="demo" className="carousel slide" data-ride="carousel">

                {/* <!-- Indicators --> */}
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                    <li data-target="#demo" data-slide-to="3"></li>
                    <li data-target="#demo" data-slide-to="4"></li>
                    <li data-target="#demo" data-slide-to="5"></li>
                </ul>

                {/* <!-- The slideshow --> */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={process.env.PUBLIC_URL + '/image/slide/0.jpg'} alt="Los Angeles" width="100%" height="20%" />
                    </div>
                    <div className="carousel-item">
                        <img src={process.env.PUBLIC_URL + '/image/slide/1.jpg'} alt="Chicago" width="100%" height="20%" />
                    </div>
                    <div className="carousel-item">
                        <img src={process.env.PUBLIC_URL + '/image/slide/2.jpg'} alt="New York" width="100%" height="20%" />
                    </div>
                    <div className="carousel-item">
                        <img src={process.env.PUBLIC_URL + '/image/slide/3.jpg'} alt="New York" width="100%" height="20%" />
                    </div>
                    <div className="carousel-item">
                        <img src={process.env.PUBLIC_URL + '/image/slide/4.jpg'} alt="New York" width="100%" height="20%" />
                    </div>
                    <div className="carousel-item">
                        <img src={process.env.PUBLIC_URL + '/image/slide/5.jpg'} alt="New York" width="100%" height="20%" />
                    </div>
                </div>

                {/* <!-- Left and right controls --> */}
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>
        );
    }
}

export default BodySlide