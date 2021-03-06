// index.tsx
import * as React from 'react';
import { render } from 'react-dom';
import MainController from './core/start/main.controller';
let globalmessage = '';
let version = '0.1';
try {
    render(React.createElement(MainController, { globalmessage: globalmessage, version: version }), document.getElementById('main'));
}
catch (e) {
    React.createElement("div", null, "This application requires a modern browser, like Chrome, Firefox, Safari or MS Edge.");
}
