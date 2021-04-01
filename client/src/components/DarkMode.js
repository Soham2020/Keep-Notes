import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, createMuiTheme } from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';

export default function DarkMode() {
    const [ darkMode, setDarkMode ] = useState(false);
    const theme = createMuiTheme({
        palette: {
            type: darkMode ? 'dark' : 'light',
        }
    })
    const handleDarkMode = () => {
        setDarkMode(!darkMode)
    }
    return(
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <Brightness4Icon style={{ color: "black", cursor: "pointer" }} onClick={handleDarkMode} value={darkMode} fontSize="large" />
                </CssBaseline>
            </ThemeProvider>
        </>
    )
}