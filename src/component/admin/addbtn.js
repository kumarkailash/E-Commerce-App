import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



export default class ContainedButtons extends React.Component{
constructor(){
super()
this.state={

}
}

 render(){
  return (
    <div>
   
      <input
        style={{display:"none"}}
        accept="image/*"
        // className={classes.input}
        id="contained-button-file"
        type="file"
        name="pagetwodata"
        value={this.state.pagetwodata}
        onChange={this.handleFile}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" >
          Upload
        </Button>
      </label>
    </div>
  )}
    }
