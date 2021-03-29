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
    margin: "15px auto",
    color: "#f6ff9a",
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    transition: "0.6s",
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  };
  return (
    <>
      <form>
        <Grid className={classes.card}>
          <CardContent style={CardStyle}>
            <TextField
              label="Title"
              placeholder="title"
              fullWidth
              required
            ></TextField>
            <TextField
              label="Details"
              placeholder="details"
              fullWidth
              required
              multiline
              rows={9}
              rowsMax={10}
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
