import { Grid, CardContent, TextField, Button } from "@material-ui/core";
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

export default function Creation() {
  const classes = useStyles();
  const CardStyle = {
    padding: 10,
    height: "40vh",
    width: 280,
    margin: "50px auto",
    fontFamily: "BlinkMacSystemFont"
  };
  const btnStyle = {
    margin: "15px auto"
  };
  return (
    <>
      <Grid className={classes.card}>
        <CardContent style={CardStyle}>
          <TextField
            label="Title"
            placeholder="title"
            fullWidth
            required
          ></TextField>
          <TextField
            rowsMax={3}
            label="Details"
            placeholder="details"
            fullWidth
            required
          ></TextField>
          <Button
            variant="contained"
            type="submit"
            color="secondary"
            style={btnStyle}
          >
            Submit
          </Button>
        </CardContent>
      </Grid>
    </>
  );
}
