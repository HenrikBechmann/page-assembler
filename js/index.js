// index.tsx
import * as React from 'react';
import { render } from 'react-dom';
// import injectTapEventPlugin from 'react-tap-event-plugin'
// import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
let Main = () => {
    return React.createElement("div", null, "Hello there world!");
};
console.log("in index.tsx");
try {
    render(React.createElement(Main, null), document.getElementById('main'));
}
catch (e) {
    React.createElement("div", null, "This application requires a modern browser, like Chrome, Firefox, Safari or MS Edge.");
}
