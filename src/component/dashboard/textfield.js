import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

import firebase from '../../config/database/firebase.js'
 class OutlinedTextFields extends React.Component{
  constructor(){
    super()
    this.state={
      
    }
  }


  addProduct(){
    firebase.firestore().collection("products").add(this.state)
}


async handleFile(e){
  console.log(e)
  alert("dfd")
   let fileName = e.target.files[0].name
   let ref = firebase.storage().ref('/').child(`images/${fileName}`)
   console.log(ref)
   await ref.put(e.target.files[0])
       ref.getDownloadURL()
       .then((url)=>{
           console.log("Url==>",url)
           this.setState({productimage:url})
          
       })
}



  
render(){
  let {title,price,discription,productimage,category} =this.state
  return (
    <div>
<main style={{textAlign:"center"}} >
<Paper style={{ width: "70%", margin: "auto", padding: "20px", marginTop: "10%" }}>

      <TextField
        id="outlined-email-input"
        label="product name"
        type="text"
        name="product name"
        autoComplete="title"
        margin="normal"
        variant="outlined"
        style={{width:"100%"}}
        onChange={(e)=>this.setState({title:e.target.value})}
      />

      <TextField
        id="outlined-email-input"
        label="price"
        type="number"
        name="price"
        autoComplete="price"
        margin="normal"
        variant="outlined"
        style={{width:"100%"}}
        onChange={(e)=>this.setState({price:e.target.value})}
      />

      <TextField
        id="outlined-email-input"
        label="discription"
        type="text"
        name="discription"
        autoComplete="discription"
        margin="normal"
        variant="outlined"
        style={{width:"100%"}}
        onChange={(e)=>this.setState({discription:e.target.value})}
      />

     
<div>
   
   <input
     accept="image/*"
     id="contained-button-file"
     type="file"
     style={{width:"100%",display:"none"}}
     value={this.state.pagetwodata}
    onChange={(e)=>{this.handleFile(e)}}
    />
   <label htmlFor="contained-button-file" style={{width:"100%"}} >
     <Button variant="contained" component="span" style={{width:"100%"}} >
       Upload image
     </Button>
   </label>

<MDBDropdown>
      <MDBDropdownToggle caret color="primary">
        select category
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        
        <MDBDropdownItem name="phone & tablate" onClick={(e)=>this.setState({category:e.target.name})}>phone & tablate</MDBDropdownItem>
        <MDBDropdownItem name="camera & accessories" onClick={(e)=>this.setState({category:e.target.name})}>camera & accessories</MDBDropdownItem>
        <MDBDropdownItem name="computer & laptop" onClick={(e)=>this.setState({category:e.target.name})}>computer & laptop</MDBDropdownItem>
        <MDBDropdownItem name="musical instruments" onClick={(e)=>this.setState({category:e.target.name})}>musical instruments</MDBDropdownItem>
        <MDBDropdownItem name="latest product" onClick={(e)=>this.setState({category:e.target.name})}>latest product</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>


   <p style={{padding:"20px 0px 20px 0px"}}>   


   {title && price && discription && productimage && category  ? 
 <Button variant="contained" style={{float:"right"}}  color="primary"  onClick={this.addProduct.bind(this)}>
        Add product
     </Button>           :
     <Button variant="contained" style={{float:"right"}}  color="primary"   onClick={this.addProduct.bind(this)} disabled="false">
        Add product
     </Button>                
     } 



     
    </p>

 </div>
     
      </Paper>
      </main>
    </div>
  )};
}

export default OutlinedTextFields