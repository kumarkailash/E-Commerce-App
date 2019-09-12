import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import img1 from "./../../images/bat1.png"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>


        <Typography>


<img src={img1} align="top"/>
 <span>Cricket Bat</span>




   


          
        </Typography>
      
      </Paper>
    </div>
  );
}