import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Home from "./contenor/home/home"
import AppRouter from "./confing/router/router"
// import RecipeReviewCard from "./contenor/card/card"
import  FooterPagePro  from "./component/footer/footer"


class App extends React.Component{
  render(){
    return(
      <div>

<AppRouter/>
        

        {/* <RecipeReviewCard/> */}
      <div style={{marginTop:'50px'}}>
        < FooterPagePro/>
        </div>


      </div>
    )
  }
}

export default App;
