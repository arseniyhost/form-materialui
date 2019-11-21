import React from 'react';
import { Provider } from 'react-redux';
import store from './../src/redux/redux-store';
import App from './../src/App';
import { storiesOf } from '@storybook/react';


storiesOf('Component', module)
    .add('ComponentView', () =>
        <Provider store={store}>
            <App />
        </Provider>)
