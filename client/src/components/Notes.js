// hompage after login
import React from 'react';
import Navbar from './Navbar';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Home from './NotesComponent/Home';
import Creation from './NotesComponent/Creation';
import Edit from './NotesComponent/Edit';

export default function Notes ({ setIsLogin }) {
    return(
        <>
            <Router>
                <Navbar setIsLogin={ setIsLogin }/>   
                <Switch>
                    <Route exact path ="/" component={Home} />
                    <Route exact path="/creation" component={Creation} />
                    <Route exact path="/edit" component={Edit} />
                </Switch>
            </Router>
        </>
    )
}