// index.tsx

import * as React from 'react';
import { render } from 'react-dom'

import MainController from './core/start/main.controller'

let globalmessage = ''
let version = '0.1'

try {
render( <MainController globalmessage = {globalmessage} version = {version} />, 
     document.getElementById('main') )
} catch (e) {
    <div>
        This application requires a modern browser, like Chrome, Firefox, Safari or MS Edge.
    </div>
}
