import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// When using a component-based layout, this line will have to be adjusted for the right component to be imported.
import GitCardApp from './components/GitCardApp/GitCardApp';

// The below line is unlikely to change. App startup.
// Adds the main react component (app) to root html element. Refer to index.html.
ReactDOM.render( 
    <React.StrictMode>
        <GitCardApp/>
    </React.StrictMode>,
    document.getElementById('root')
);