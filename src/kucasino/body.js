import React, { Component } from 'react';
import Widget from './body-widget';
import BodySlide from './body-slide';
import Video from './body-video';
import BodyGuide from './body-guide';
import BodyInfo from './body-info';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            options: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' },
            tab1: React.createElement("input", {
                className: "main-radio", id: "tab1", type: "radio", name: "tabs", checked: "checked"
            }),
            tab2: React.createElement("input", {
                className: "main-radio", id: "tab2", type: "radio", name: "tabs"
            }),
            tab3: React.createElement("input", {
                className: "main-radio", id: "tab3", type: "radio", name: "tabs"
            })
        };
      }
    
      componentDidMount() {
        this.setState({
            tab1: React.createElement("input", {
                className: "main-radio", id: "tab1", type: "radio", name: "tabs"
            })
          });  
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          date: new Date()
        });
      }
     
    render() {
        return (
            <div className='container body'>
                <Widget />
                <BodySlide />
                <p class="time">Hôm nay: {this.state.date.toLocaleDateString('vn-VN', this.state.options)}.</p>
                <main>
                    <div class="main-tab">
                        {this.state.tab1}
                        <label class="main-label" for="tab1">Video</label>
                        {this.state.tab2}
                        <label class="main-label" for="tab2">Cách Choi</label>
                        {this.state.tab3}
                        <label class="main-label" for="tab3">Thông Tin</label>
                        <section id="content1">
                            <Video />
                        </section>
                        <section id="content2">
                            <BodyGuide />
                        </section>
                        <section id="content3">
                            <BodyInfo/>
                        </section>
                    </div>
                </main>
            </div>
        );
    }
}

export default Body