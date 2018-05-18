// copyright (c) 2018 Henrik Bechmann, Toronto, MIT Licence
// main.view.tsx
// display the app
'use strict';
import * as React from 'react';
const MainView = ({ globalmessage, history, style }) => {
    return React.createElement("div", { style: style }, globalmessage);
};
export default MainView;
