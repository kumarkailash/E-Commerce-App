import React from "react"
import {BrowserRouter as Router ,Route} from "react-router-dom";

import {Product,Home, Shop ,admin , Addproduct , totaladdcards ,ContactPage ,loginform,signupform ,checkout, order} from './../../contenor'

class AppRouter extends React.Component{
    render(){
return(

    <div>

    <Router>

<div>
        <Route exact path="/" component={Home}/>
        <Route path="/product" component={Product}/>
        <Route path="/shop" component={Shop}/>
        <Route path="/admin" component={admin}/>
        <Route path="/totaladdcards" component={totaladdcards}/>
        <Route path="/addtoproduct" component={Addproduct}/>
        <Route path="/contactus" component={ContactPage}/>
        {/* <Route path="/checkout" component={Checkout}/> */}
        <Route path="/loginform" component={loginform}/>
        <Route path="/signup" component={signupform}/>
        <Route path="/checkout" component={checkout}/>
        <Route path="/Orders" component={ order}/>


       

        




        

        


        {/* <Route path="/product" component={Product}/>
        <Route path="/product" component={Product}/>
        <Route path="/product" component={Product}/> */}
        
        </div>

    </Router>

    
    </div>
)

    }
}
export default AppRouter;
