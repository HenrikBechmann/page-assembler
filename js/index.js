// index.tsx
import * as React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
const Main = () => {
    return React.createElement("div", { style: { color: 'cornsilk' } },
        "Hello there world!",
        React.createElement("br", null),
        React.createElement("img", { src: "/public/images/HenrikHeadshot1.jpg" }));
};
try {
    render(React.createElement(Main, null), document.getElementById('main'));
}
catch (e) {
    React.createElement("div", null, "This application requires a modern browser, like Chrome, Firefox, Safari or MS Edge.");
}
