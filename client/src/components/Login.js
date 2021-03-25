// in this stage code is working perfectly, i.e. first we have to register then log in to Notes.
// created separat states for userLogin and userRegister
// axios working perfectly
import React, { useState } from 'react';
import axios from 'axios';
import {
    Avatar,
    Grid,
    Paper,
    TextField,
    Button,
    Typography,
    Link
  } from "@material-ui/core";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';

  export default function Login({ setIsLogin }) {
    // Registration
    const [userRegister, setUserRegister] = useState({
      name: '',
      email: '',
      password: ''
    });
    const [errRegister, setErrRegister] = useState('');

    // Login
    const [userLogin, setUserLogin] = useState({
      email: '',
      password: ''
    });
    const [errLogin, setErrLogin] = useState('');


    // Registration
    const onChangeRegister = (e) => {
      const name = e.target.name;
      const value = e.target.value
      console.log(name, value);
      setUserRegister({ ...userRegister, [name]: value });
    }
    // Login
    const onChangeLogin = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      console.log(name, value);
      setUserLogin({ ...userLogin, [name]: value });
    }

    // Registration
    const registerSubmit = async (e) => {
      e.preventDefault();
      try{
          const res = await axios.post('/users/register', {
              username: userRegister.name,
              email: userRegister.email,
              password: userRegister.password
          });
          setUserRegister({name: '', email: '', password: ''});
          setErrRegister(res.data.msg);
      }catch (err) {
          err.response.data.msg && setErrRegister(err.response.data.msg)
      }
  }
  // Login
    const loginSubmit = async (e) => {
      e.preventDefault();
      try{
        const res = await axios.post('/users/signin', {
          email: userLogin.email,
          password: userLogin.password
        });
        setUserLogin({ name: '', email: '', password: ''});
        localStorage.setItem('tokenStore', res.data);
        setIsLogin(true);
      }catch(err) {
        err.response.data.msg && setErrLogin(err.response.data.msg)
      }
    }
    const [on, setOn] = useState(false);
    const style = {
        visibility: on ? "visible" : "hidden",
        opacity: on ? 1 : 0
    }
    const paperStyle = {
      padding: 10,
      height: "60vh",
      width: 280,
      margin: "61px auto",
      fontFamily: "BlinkMacSystemFont"
    };
    const avatarStyle = {
      backgroundColor: "#002884"
    };
    const fontStyle = {
      fontFamily: "BlinkMacSystemFont"
    };
    const btnStyle = {
      margin: "15px auto"
    };
    return (
      <>
      <form onSubmit={loginSubmit}>
        <Grid>
          <Paper elevation={10} style={paperStyle} >
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <LockOpenIcon />
              </Avatar>
              <h2 style={fontStyle}>Sign In</h2>
            </Grid>
            <TextField
              name="email"
              label="Email"
              placeholder="Email"
              fullWidth
              required
              value={userLogin.email}
              onChange={onChangeLogin}
            ></TextField>
            <TextField
              name="password"
              label="Password"
              placeholder="Password"
              type="password"
              fullWidth
              required
              value={userLogin.password}
              onChange={onChangeLogin}
            ></TextField>
            <Button
              variant="contained"
              type="submit"
              color="secondary"
              fullWidth
              style={btnStyle}
            >
              Submit
            </Button>
            <Typography>
              You don't know me?
              <Link href="#" onClick={() => {
                setOn(true)
              }}> Register</Link>
            </Typography>
            <Typography>{errLogin}</Typography>
          </Paper>
        </Grid>
      </form>
      
      <form onSubmit={registerSubmit} style={ style }>
        <Grid>
          <Paper elevation={10} style={paperStyle} >
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <LockIcon />
              </Avatar>
              <h2 style={fontStyle}>Sign Up</h2>
            </Grid>
            <TextField
              name="name"
              label="Username"
              placeholder="username"
              fullWidth
              required
              value={userRegister.name}
              onChange={onChangeRegister}
            ></TextField>
            <TextField
              name="email"
              label="Email"
              placeholder="Email"
              fullWidth
              required
              value={userRegister.email}
              onChange={onChangeRegister}
            ></TextField>
            <TextField
              name="password"
              label="Password"
              placeholder="Password"
              type="password"
              fullWidth
              required
              value={userRegister.password}
              onChange={onChangeRegister}
            ></TextField>
            <Button
              variant="contained"
              type="submit"
              color="secondary"
              fullWidth
              style={btnStyle}
            >
              Submit
            </Button>
            <Typography>
              You know me?
              <Link href="#" onClick={() => {
                setOn(false)
              }}> Sign In</Link>
            </Typography>
            <Typography>{errRegister}</Typography>
          </Paper>
        </Grid>
      </form>
        

      </>
    );
  }
  