// copyright (c) 2018 Henrik Bechmann, Toronto, MIT Licence
// main.view.tsx

// display the app

'use strict'

import * as React from 'react'


const Main = () => {
    return <div style={{color:'cornsilk'}}>Hello world!<br />
    <img src="/public/images/HenrikHeadshot1.jpg" />
    </div>
}

const MainView = ({globalmessage, history, style}) => {
    return <div style = {style}>
        <Main />
    </div>
}

export default MainView
