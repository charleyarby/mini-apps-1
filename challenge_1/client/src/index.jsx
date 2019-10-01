import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
//import movies from './dummyData.js';

var exampleBoard = [[0,0,0],
                    [0,0,0],
                    [0,0,0]];

ReactDOM.render(<App data={exampleBoard} />, document.getElementById('app'));