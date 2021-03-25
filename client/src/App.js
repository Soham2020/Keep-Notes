// import logo from './logo.svg';
// import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Login from './components/Login';
import Notes from './components/Notes';
function App() {
  const [ isLogin, setIsLogin ] = useState(false);
  useEffect(() => {
    const loginUser = async () => {
      const token = localStorage.getItem('tokenStore');
      if(token){
        const verification = await axios.get('/users/verify', {
          headers: { Authorization: token }
        })
        console.log(verification);
        setIsLogin(verification.data);
        if(verification.data === false){
          return localStorage.clear();
        }
      }else{
        setIsLogin(false);
      }
    }
    loginUser();
  }, []);
  return (
    <>
      <h1>Gate-way Page</h1>
      {
        isLogin ? <Notes /> : <Login setIsLogin={setIsLogin} />
      }
    </>
  );
}

export default App;
