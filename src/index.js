import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers/reducers';
import Footer from './kucasino/footer';
import Header from './kucasino/header';
import Body from './kucasino/body';
import './css/master.css';
import * as serviceWorker from './serviceWorker';

let store = createStore(todoApp)
let rootElement = document.getElementById('root')

render(
    <Provider store={store}>
            <Header />
            <Body />
            <Footer />
    </Provider>,
    rootElement
)

serviceWorker.unregister();
