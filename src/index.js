import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';

import BooksList from './components/BooksList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <Switch>
           <Route path='/' component={BooksList} />
        </Switch>
    </Router>, document.getElementById('root'));
registerServiceWorker();
