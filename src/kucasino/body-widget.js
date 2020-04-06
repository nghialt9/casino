import React, { Component } from 'react';

class Widget extends Component {
    state = { isBoxVisible: false };
    
    updateDimensions = () => {
        this.stick();
    };
    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }
    componentWillUnmount() {
        window.addEventListener('resize', this.updateDimensions);
    }

    stick() {
        if(window.innerWidth < 769) this.setState({isBoxVisible: true });
        else this.setState({isBoxVisible: false });
        console.log(this.state.isBoxVisible);
    }

    render() {
        let classN;
        if (window.innerWidth < 769) classN = 'hidden';
        return (
            <div className={`widget ${this.state.isBoxVisible ? "" : ""} ${classN}`}>
                <img src='https://stc.sp.zdn.vn/zaloid/client/images/favicon.png' alt='Zalo' width='40%' />
            </div>
        );
    }
}

export default Widget