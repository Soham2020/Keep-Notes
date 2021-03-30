import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { Grid, CardContent, TextField, Button, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    top: '50%',
    left: '50%',
    borderRadius: 10,
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    backgroundSize: '200%',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    transition: '0.6s',
    backgroundImage: 'linear-gradient(45deg, #EDF051, #5DE0D0, #FFC312)',
    '&:hover': {
      backgroundPosition: 'right'
    }
  }
});

export default function Edit({ req }) {

  // connection with backend
  const [create, setCreate] = useState({
    title: "",
    content: "",
    id: ""
  });

  const history = useHistory();

  useEffect(() => {
    const getNote = async () => {
        const token = localStorage.getItem('tokenStore');
        if( req.params.id ){
            const response = await axios.get(`/notes/${req.params.id}`, {
                headers: { Authorization: token }
            })
            setCreate({
                title: response.data.title,
                content: response.data.content,
                id: response.data._id
            })
        }
    }
    getNote();
  }, [ req.params.id ])

  const onChangeVal = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);
    setCreate({ ...create, [name]: value });
  }

  const makeEdit = async (e) => {
    e.preventDefault();
    try{
      const token = localStorage.getItem('tokenStore');
      if(token){
        const { title, content, id } = create;
        const newCreate = {
          title, 
          content
        }
        await axios.put(`/notes/${id}`, newCreate, {
          headers: { Authorization: token }
        });
        return history.push('/')
      }
    }catch(err) {
        window.location.href = "/";
    }
  }



  // styles
  const classes = useStyles();
  const CardStyle = {
    padding: 10,
    height: "40vh",
    width: 280,
    margin: "50px auto",
    fontFamily: "BlinkMacSystemFont"
  };
  const btnStyle = {
    margin: "15px auto",
    color: "#f6ff9a",
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    transition: "0.6s",
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  };
  return (
    <>
      <Typography 
        align="center"
        variant="h4"
        color="secondary"
        style={{ marginTop: "20px" }}
      >
        Edit your Note {create.title} </Typography>
      <form onSubmit={makeEdit} autoComplete="off">
        <Grid className={classes.card}>
          <CardContent style={CardStyle}>
            <TextField
              type="text"
              name="title"
              label="Title"
              placeholder="title"
              fullWidth
              id="title"
              required
              value={create.title}
              onChange={onChangeVal}
            ></TextField>
            <TextField
              type="text"
              name="content"
              label="content"
              placeholder="content"
              fullWidth
              id="content"
              required
              multiline
              rows={9}
              rowsMax={10}
              value={create.content}
              onChange={onChangeVal}
            ></TextField>
            <Button
              variant="contained"
              type="submit"
              style={btnStyle}
            >
              Submit
            </Button>
          </CardContent>
        </Grid>
      </form>
    </>
  );
}
