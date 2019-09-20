import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { amber, lightGreen } from '@material-ui/core/colors'


const theme = createMuiTheme({
    palette: {
        primary: {
            main: lightGreen.A700
        },
        secondary: {
            main: amber[700]
        },
        type: 'dark'
    },
})

ReactDOM.render(<MuiThemeProvider theme={theme}><App /></MuiThemeProvider>, document.getElementById('root'));
