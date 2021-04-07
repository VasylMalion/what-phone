// core
import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom";

// styles
import './index.css';

// store
import {store} from "./redux/store";

// components
import App from './components/app/app';

ReactDOM.render(
    <Suspense fallback={<div>Loading... </div>}>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </Suspense>,
  document.getElementById('root')
);

