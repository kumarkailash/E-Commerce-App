import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import { height } from '@material-ui/system';
// import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline-block',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
    // backgroundColor:"#2bbbad",
    // color:"white"
  },


}
));

export default function OutlinedChips(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Chip
        label={props.name}
        clickable
        className={classes.chip}
        color="primary"
        variant="outlined"
        onClick={()=>props.onClick(props.name)}
      />

    </div>
  );
}