import React from 'react';
import { ReactDOM, render } from 'react-dom'

//import './index.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import App from './App';


import registerServiceWorker from './registerServiceWorker';

// ICI ON PEUT TRES BIEN DECIDER DE CREER UN NOUVELLE ELEMNT DANS LE DOM ET ATTRIBUER UN COMPONENT DEDANS comme faire pour app sur lelemnt div root
render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));



registerServiceWorker();
