import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import './api/config'
import * as serviceWorker from './serviceWorker';


// antd样式
import 'antd/dist/antd.css';

ReactDOM.render(
	<App/>,
	document.getElementById('root')
);

serviceWorker.unregister();
