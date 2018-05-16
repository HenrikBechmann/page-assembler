// index.tsx

import * as React from 'react';
import { render } from 'react-dom'
// import injectTapEventPlugin from 'react-tap-event-plugin'
// import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

let Main = () => {
    return <div style={{color:'cornsilk'}}>Hello there world!
    <img src="/public/images/HenrikHeadshot1.jpg" />
    </div>
}

try {
render( <Main />, 
     document.getElementById('main') )
} catch (e) {
    <div>
        This application requires a modern browser, like Chrome, Firefox, Safari or MS Edge.
    </div>
}
