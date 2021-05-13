import './styles/app.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './ts/App';

const appContainer = document.querySelector('#react-app');
const ajaxUrl      = appContainer.dataset.ajaxUrl;

ReactDOM.render(<App ajaxUrl={ajaxUrl}/>, document.getElementById('react-app'));