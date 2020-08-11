import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'; 

import { Provider } from 'react-redux' 
import store, { persistor } from './store';

import Home from './pages/Home';

export default function Routes() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Home} />
                    </Switch>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    )
}