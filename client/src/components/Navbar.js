import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DarkMode from './DarkMode';
import Link from '@material-ui/core/Link';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Avatar from '@material-ui/core/Avatar';
import {pink} from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar({ setIsLogin }) {
  const classes = useStyles();
  const logOut = () => {
    localStorage.clear();
    setIsLogin(false);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary" elevation={10}>
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <NotesIcon />
          </IconButton> */}
          <Avatar edge="start" className={classes.menuButton} aria-label="menu" variant="circle" >
            <AssignmentIcon className={classes.pink} />
          </Avatar>
          <Typography variant="h6" className={classes.title}>
            <Link href="/" color="inherit">Keep Notes</Link>
          </Typography>
          <Button color="inherit">
            <Link href="/creation" color="inherit">
              <Typography>Add Note</Typography>
            </Link>
          </Button>
          <Button color="inherit" onClick={logOut}>
            <Typography>Sign Out</Typography>
          </Button>
          <DarkMode />
        </Toolbar>
      </AppBar>
    </div>
  );
}
