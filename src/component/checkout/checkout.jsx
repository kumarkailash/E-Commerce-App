import React from 'react' 
import './checkout.css'
import firebase from "./../../confing/firebase/firebase"

import PrimarySearchAppBar from "./../../contenor/Appbar/appbar"

import { Link } from 'react-router-dom';
  



    class PersistentDrawerLeft extends React.Component {
        constructor(props) {
    console.log(props)
            super(props)
            this.state = {
                count: 2,
                myCart: [],
                products:[]
            }
    
        }
        componentDidMount() {
            let data = localStorage.getItem('myCart')
            if (data) {
                this.setState({
                    myCart: JSON.parse(data),
                })
            }
    
    
        }
        checkout = (data) => {
            console.log(this.state)
            // this.props.history.push("/product", data)
            firebase.firestore().collection("orders").add(this.state)
            
            alert("order successfully ")
    
        }
    
        render() {
    
console.log(this.props)
let orderData ={
    firstname: this.state.firstname,
    email: this.state.email,
    adress:this.state.adress,
    city:this.state.city,
    state1:this.state.state1,
    zip:this.state.zip,
    cardname:this.state.cardname,
    cardnumber:this.state.cardnumber,
    expmonth:this.state.expmonth,
    expyear:this.state.expyear,
    cvv:this.state.cvv,
    sameadar:this.state.sameadar
}
console.log(orderData)

// console.log(this.state)


return(

<div>
<PrimarySearchAppBar myCart={this.state.myCart} path={this.props.history} />
 
<br/>
<br/>


<div class="row">
  <div class="col-75">
    <div class="container">
      <div>

        <div class="row">
          <div class="col-50">
            <h3>Billing Address</h3>
            <label for="fname"><i class="fa fa-user"></i> Full Name</label>
            <input  className = "inputfield"     onChange={(e) => this.setState({ firstname: e.target.value })}  type="text" id="fname" name="firstname"    placeholder="Enter Name" />
            <label for="email"><i class="fa fa-envelope"></i> Email</label>
            <input  className = "inputfield"     onChange={(e) => this.setState({ email: e.target.value })}  type="text" id="email" name="email" placeholder="Enter Email" />
            <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
            <input   className = "inputfield"    onChange={(e) => this.setState({adress: e.target.value })}  type="text" id="adr" name="address" placeholder="Enter Address" />
            <label for="city"><i class="fa fa-institution"></i> City</label>
            <input   className = "inputfield"    onChange={(e) => this.setState({city: e.target.value })} type="text" id="city" name="city" placeholder="Enter City" />

            <div class="row">
              <div class="col-50">
                <label for="state">State</label>
                <input  className = "inputfield"   onChange={(e) => this.setState({state1: e.target.value })} type="text" id="state" name="state" placeholder="Enter State" />
              </div>
              <div class="col-50">
                <label for="zip">Zip</label>
                <input  className = "inputfield"  onChange={(e) => this.setState({zip: e.target.value })} type="text" id="zip" name="zip" placeholder="Enter Zip Code" />
              </div>
            </div>
          </div>

          <div class="col-50">
            <h3>Payment</h3>
            {/* <label for="fname">Accepted Cards</label>
            <div class="icon-container">
              <i class="fa fa-cc-visa" style={{color:'navy'}}></i>
              <i class="fa fa-cc-amex" style={{color:'blue'}}></i>
              <i class="fa fa-cc-mastercard" style={{color:'red'}}></i>
              <i class="fa fa-cc-discover" style={{color:'orange'}}></i>
            </div> */}
            <label for="cname">Name on Card</label>
            <input className = "inputfield"     onChange={(e) => this.setState({cardname: e.target.value })}  type="text" id="cname" name="cardname" placeholder="Enter Card Name" />
            <label for="ccnum">Credit card number</label>
            <input className = "inputfield"    onChange={(e) => this.setState({cardnumber: e.target.value })} type="text" id="ccnum" name="cardnumber" placeholder="Enter Number" />
            <label for="expmonth">Exp Month</label>
            <input  className = "inputfield"   onChange={(e) => this.setState({expmonth: e.target.value })} type="text" id="expmonth" name="expmonth" placeholder="Enter Exp Month" />

            <div class="row">
              <div class="col-50">
                <label for="expyear">Exp Year</label>
                <input className = "inputfield"    onChange={(e) => this.setState({expyear: e.target.value })} type="text" id="expyear" name="expyear" placeholder="Enter Exp Year" />
              </div>
              <div class="col-50">
                <label for="cvv">CVV</label>
                <input className = "inputfield"    onChange={(e) => this.setState({cvv: e.target.value })} type="text" id="cvv" name="cvv" placeholder="Enter CVV Number " />
              </div>
            </div>
          </div>

        </div>
        <label>
          <input className = "inputfield"    onChange={(e) => this.setState({sameadar: e.target.value })} type="checkbox" checked="checked" name=" Enter Sameadr" /> Shipping address same as billing
        </label>


        <Link to="/loginform">
        <input  onClick={this.checkout} type="submit" value="Continue to checkout" class="btn" />

        </Link>
      </div>
    </div>
  </div>

  <div class="col-25">
    <div class="container">
      <h4>Cart
        <span class="price" style={{color:'black'}}>
          <i class="fa fa-shopping-cart"></i>
          <b>4</b>
        </span>
      </h4>
      <p><a href="#">Product 1</a> <span class="price">$15</span></p>
      <p><a href="#">Product 2</a> <span class="price">$5</span></p>
      <p><a href="#">Product 3</a> <span class="price">$8</span></p>
      <p><a href="#">Product 4</a> <span class="price">$2</span></p>
      <hr />
      <p>Total <span class="price" style={{color:'black'}}><b>$30</b></span></p>
    </div>
  </div>
</div>

</div>

)}
}
export default PersistentDrawerLeft;