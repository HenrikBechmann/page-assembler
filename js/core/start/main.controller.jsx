'use strict';
import * as React from 'react';
import createHistory from 'history/createBrowserHistory';
import { DragDropContext } from 'react-dnd';
import DnDTouchBackend from 'react-dnd-touch-backend';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
const DnDBackend = DnDTouchBackend({ enableMouseEvents: true });
const muiTheme = getMuiTheme();
const history = createHistory();
import MainView from './main.view';
class Main extends React.Component {
    render() {
        let { globalmessage, version } = this.props;
        let mainviewstyle;
        // React.CSSProperties = {
        //     fontFamily,
        // }
        return (<MuiThemeProvider muiTheme={muiTheme}>
                <MainView history={history} globalmessage={globalmessage} style={mainviewstyle}/>
            </MuiThemeProvider>);
    }
}
export default DragDropContext(DnDBackend)(Main);
