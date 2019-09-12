import React from 'react';
// import '../App.css'
import { makeStyles } from '@material-ui/core/styles';
import PrimarySearchAppBar from "./../../contenor/Appbar/appbar"


import Navbar from './../../contenor/Appbar/appbar'
import ResultCard from './../../component/totalAddcards/totaladdcards'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom';

export default class totaladdcards extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            myCart:[]
        }
        }
        componentDidMount(){
          if(JSON.parse(localStorage.getItem('myCart'))){
              this.setState({
                  myCart:JSON.parse(localStorage.getItem('myCart')),
              })
          }
      }

     
  

    render(){
        
let {myCart} = this.state;
console.log(myCart)
        return(
            <div>
            <PrimarySearchAppBar myCart={this.state.myCart} path={this.props.history}/>
           
           
             <div style={{paddingTop:"140px"}}>
            <div  style={{width:"90.4%", margin:"auto",textAlign:"center"}}>
                    <TableRow key={"row.desc"} style={{textAlign:"center", backgroundColor:"black", color:"white"}}>
                      <TableCell align="left"  style={{ width:"250px", fontWeight:"bold"}}>Image</TableCell>
                      <TableCell align="left"  style={{ width:"250px", fontWeight:"bold"}}>Product Name</TableCell>
                      <TableCell align="left"  style={{ width:"250px", fontWeight:"bold"}}>Quantity</TableCell>
                      <TableCell align="left"  style={{width:"250px", fontWeight:"bold"}}>Price (PKR)</TableCell>
                      <TableCell align="left"  style={{ width:"250px", fontWeight:"bold"}}>Total</TableCell>
                  </TableRow>
            </div>
            </div>
            <div  style={{width:"90.4%", margin:"auto",textAlign:"center" }}>
                      {myCart && myCart.map((value) =>
                    <TableRow key={"row.desc"} style={{textAlign:"center", backgroundColor:"#06351f", color:"white"}}>
                      <TableCell align="left"  style={{ width:"250px", fontWeight:"bold"}}><img src = {value.image}  width="80px" alt = "produt"/></TableCell>
                      <TableCell align="left"  style={{ width:"250px", fontWeight:"bold"}}>{value.name}</TableCell>
                      <TableCell align="left"  style={{ width:"250px", fontWeight:"bold"}}>{value.count}</TableCell>
                      <TableCell align="left"  style={{width:"250px", fontWeight:"bold"}}>{value.price}</TableCell>
                      <TableCell align="left"  style={{ width:"250px", fontWeight:"bold"}}>{value.price * value.count}</TableCell>
                  </TableRow>
                  )}
                  </div>

            <div  style={{width:"90.4%", margin:"auto",textAlign:"center"}}>
                    <TableRow key={"row.desc"} style={{textAlign:"center", backgroundColor:"#06351f", color:"white"}}>
                      <TableCell align="left"  style={{ width:"250px", fontWeight:"bold"}}></TableCell>
                      <TableCell align="left"  style={{ width:"250px", fontWeight:"bold"}}> </TableCell>
                      <TableCell align="left"  style={{ width:"250px", fontWeight:"bold"}}>Quantity</TableCell>
                      <TableCell align="left"  style={{width:"250px", fontWeight:"bold"}}>Price (PKR)</TableCell>
                      <TableCell align="left"  style={{ width:"250px", fontWeight:"bold"}}>Total</TableCell>
                  </TableRow>
            </div>
<Link to="/checkout">
<br/>
            <button  onClick={this.gotocheckout} class="button button3"  style={{float:'right' , backgroundColor:"#06351f", color:"white",  padding:"8px", width:"200px",marginRight: "70px"}}>CHECK OUT</button>
            </Link>
          
            <br/>
            <br/>

            <br/>

            </div>


        )
    }

}