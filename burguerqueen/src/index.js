import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import { HashRouter } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render((
    <HashRouter>
        <App/>
    </HashRouter>
), document.getElementById('root'));

serviceWorker.register();
