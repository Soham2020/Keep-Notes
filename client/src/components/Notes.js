// hompage after login
import React from 'react';
import Navbar from './Navbar';

export default function Notes ({ setIsLogin }) {
    return(
        <>
            <Navbar setIsLogin={ setIsLogin }/>   
            <h1>User Logged in to Notes Page</h1> 
        </>
    )
}