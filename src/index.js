import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Demo from './pages/Demo'
// import Home from './pages/Home'
import LifecyclePhases from './pages/LifecyclePhases'
// import DemoPureComponent from './pages/DemoPureComponent'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<LifecyclePhases />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
