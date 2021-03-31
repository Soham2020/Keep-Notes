import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
    Grid, 
    CardContent,
    Typography
} from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    top: "50%",
    left: "25%",
    borderRadius: 10,
    position: "absolute",
    transform: "translate(-50%, -50%)",
    backgroundSize: "200%",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    transition: "0.6s",
    backgroundImage: "linear-gradient(45deg, #FFC312, #EE5A24, #00a8ff)",
    "&:hover": {
      backgroundPosition: "right"
    }
  }
});

export default function Home () {
    const classes = useStyles();

    const [ notes, setNotes ] = useState([]);
    const [ token, setToken ] = useState("");

    const getNotes = async (token) => {
        const response = await axios.get('/notes', {
            headers: { Authorization: token }
        });
        setNotes(response.data);
    }

    useEffect(() => {
        const token = localStorage.getItem('tokenStore');
        setToken(token);
        if(token){
            getNotes(token)
        }
    }, []);

    const deleteNote = async(id) => {
        try{
            if(token){
                await axios.delete(`notes/${id}`, {
                    headers: { Authorization: token }
                });
                getNotes(token);
            }
        }catch (err) {
             console.log("error");   
        }
    }

    const CardStyle = {
        padding: 10,
        height: "30vh",
        width: 280,
        fontFamily: "BlinkMacSystemFont"
      };

    return (
        <>
            <h1 style={{ marginLeft: "20px", textAlign: "center" }}>Get your Notes...</h1>
            <Grid className={classes.card}>
                {
                    notes.map((note) => (
                        <CardContent key={note._id} style={CardStyle}>
                            <Link to={`edit/${note._id}`} style={{ marginLeft: "14rem", color: "white" }}  >Edit</Link>
                            <Typography variant="subtitle2">Title:</Typography>
                            <Typography variant="h5" style={{marginRight:"40px"}}> {note.title}</Typography><br/>
                            <Typography variant="subtitle2">Content:</Typography>
                            <Typography paragraph variant="h6">{note.content}</Typography>
                            <DeleteIcon color="primary" fontSize="default" style={{ marginTop: "20px", 
                            marginRight: "13rem"}} onClick={() => {
                                deleteNote(note._id)
                            }}></DeleteIcon>
                        </CardContent>
                    ))
                }
            </Grid>
        </>
    )
}