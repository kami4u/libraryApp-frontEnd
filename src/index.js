import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css';

import Nav from './components/Nav';
import BooksList from './components/BooksList';
import GetBook from './components/GetBook';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <Nav>
            <Switch>
                <Route exact path='/' component={BooksList} />
                <Route path='/books/:id' component={GetBook} />
            </Switch>
        </Nav>
    </Router>, document.getElementById('root'));
registerServiceWorker();
