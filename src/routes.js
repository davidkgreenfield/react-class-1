import React from 'react';
import App from './App';
import history from './history';
import { BrowserRouter} from 'react-router-dom'


export const makeMainRoutes = () => {
    return (
        <BrowserRouter history={history}>
            <App />
        </BrowserRouter>
    );
}