import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, createMuiTheme, Switch } from '@material-ui/core';

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
                    <Switch color="primary" onChange={handleDarkMode} value={darkMode} />
                </CssBaseline>
            </ThemeProvider>
        </>
    )
}