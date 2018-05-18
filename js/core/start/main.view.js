// copyright (c) 2018 Henrik Bechmann, Toronto, MIT Licence
// main.view.tsx
// display the app
'use strict';
import * as React from 'react';
const Main = () => {
    return React.createElement("div", { style: { color: 'cornsilk' } },
        "Hello world!",
        React.createElement("br", null),
        React.createElement("img", { src: "/public/images/HenrikHeadshot1.jpg" }));
};
const MainView = ({ globalmessage, history, style }) => {
    return React.createElement("div", { style: style },
        React.createElement(Main, null));
};
export default MainView;
