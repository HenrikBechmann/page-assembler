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
class MainController extends React.Component {
    render() {
        let { globalmessage, version } = this.props; // TODO: display version
        let mainviewstyle = {
            fontFamily: muiTheme.fontFamily,
        };
        return (React.createElement(MuiThemeProvider, { muiTheme: muiTheme },
            React.createElement(MainView, { history: history, globalmessage: globalmessage, style: mainviewstyle })));
    }
}
export default DragDropContext(DnDBackend)(MainController);
