import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux' 
import store from './store';

import Home from './pages/Home';

export default function Routes() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}