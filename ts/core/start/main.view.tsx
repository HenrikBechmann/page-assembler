// copyright (c) 2018 Henrik Bechmann, Toronto, MIT Licence
// main.view.tsx

// display the app

'use strict'

import * as React from 'react'

const MainView = ({globalmessage, history, style}) => {
    return <div style = {style}>
        {globalmessage}
    </div>
}

export default MainView
