// import React ,{useState} from 'react';
// // import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
// import Paper from '@material-ui/core/Paper';
// import SimpleRating from './../../component/Rating/Rating'
// import Button from '@material-ui/core/Button';
// import { MdShoppingCart } from 'react-icons/md';
// import PrimarySearchAppBar from "./../../contenor/Appbar/appbar"


// class  CardExample1 extends React.Component{
//     constructor(props){

// super(props)
//     this.state ={
//         count:0,
//         myCart:[]
//     }

//     }
//     addToCart=()=>{
//  let {count,myCart} = this.state;
//  let cart={
//      image:this.props.location.state.image,
//      price:this.props.location.state.rs,
//      count:count,
//      name:this.props.location.state.name
//  }
//  myCart.push(cart);
//  this.setState({
//      myCart:myCart
//  })

//  localStorage.setItem("myCart",JSON.stringify(myCart));


//     }
// componentDidMount(){

//     if(JSON.parse(localStorage.getItem('myCart'))){
//         this.setState({
//             myCart:JSON.parse(localStorage.getItem('myCart')),
//         })
//     }
// }

// render(){
//  let {count ,myCart} = this.state;
//  console.log(this.props.location)
//     return (
// <div>
//  <PrimarySearchAppBar myCart={myCart} props={this.props.history}/> 
//          <div style={{ margin: "20px" }}>
//             <Paper style={{ padding: 20, display: "flex" }}>
//                 <div style={{ marginRight: "10px" }}>
//                     <img src={this.props.location.state.image} width="500" />
//                 </div>
//                 <div style={{ marginTop: '10px' }}> 
//                     <h2>{this.props.location.state.name}</h2>
//                     <SimpleRating />
//                     <p>{this.props.location.state.about}</p>
//                     <h3 style={{ color: "#9C27B0" }}>  Rs:
//                      {this.props.location.state.rs}</h3>
//                     <h3>Quantity:</h3>
//                     <div style={{ display: 'flex', border: '1px solid', justifyContent: "space-between", width: "20%" }}>
//                         <button onClick={()=>this.setState({count:this.state.count>0?this.state.count-1:0})} style={{ height: "35px", width: "40px", backgroundColor: "#eff0f5" }}>-</button>
//                         <h5 style={{ color: "#9C27B0", marginTop: "2px" }}>{this.state.count}</h5>
//                         <button onClick={()=>this.setState({count:this.state.count+1})} style={{ height: "35px", width: "40px", backgroundColor: "#eff0f5" }}>+</button>
//                     </div>
//                     <Button onClick={()=>this.addToCart()}  size="large" style={{ color: "#fff", backgroundColor: "#9C27B0", marginTop: "30px" }}>
//                         <MdShoppingCart     />Add to Cart
//                     </Button>
//                 </div>
//             </Paper>
//         </div>
 

//         </div>
//     )
// }
// }

// export default CardExample1;