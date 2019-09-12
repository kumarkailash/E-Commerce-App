import React from 'react';

import firebase from "./../../confing/firebase/firebase"

import shopBaner from "./../../images/eybaner1.png"
import shopBaner2 from "./../../images/baner3ndpic.jpg"


import RecipeReviewCard from "./../../contenor/card/card"
import OutlinedChips from './../../component/chips/chips'
import PrimarySearchAppBar from "./../Appbar/appbar"
import CarouselPage from "./../../component/slider/slider"
import FormPage from "./../../component/signup/signup"
import LoginFormPage from "./../../component/loginform/loginform"

class Home extends React.Component {
    constructor(props) {

        super(props)
        this.state = {
            count: 0,
            myCart: [],
            products: []
        }

    }
    componentDidMount() {
        let data = localStorage.getItem('myCart')
        if (data) {
            this.setState({
                myCart: JSON.parse(data),
            })
        }

        let { products } = this.state
        firebase.firestore().collection("Products").get()
            .then(data => {
                data.forEach(doc => {
                    let getData = doc.data()
                    products.push(getData)
                    this.setState({
                        products: products
                    })
                })

            })

    }
    goToProduct = (data) => {
        console.log(this.props)
        this.props.history.push("/product", data)

    }




    


    filter = (data) => {
        let {products} = this.state
       let allData =  []
        firebase.firestore().collection("Products").where('category', '==' , data).get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              let getproducts = doc.data()
              allData.push(getproducts)
              console.log(allData)
              this.setState({
                products: allData
              })
            })
          })
    }



    render() {
        console.log(this.state.myCart);
        let { myCart, products } = this.state

        return (






            <div className="App">
                <PrimarySearchAppBar myCart={this.state.myCart} path={this.props.history} />
                <CarouselPage />

                <br />

                <img src={shopBaner2} style={{ width: "100%", textAlign: "center", height: "300px", }} />
                <br />
                <br />

<div style={{textAlign:"center"}}>

                <OutlinedChips onClick={this.filter} name="Fansy Glasses" />
                <OutlinedChips onClick={this.filter} name="3D Glass" />

                <OutlinedChips onClick={this.filter} name="Stylish Glasses" />

                <OutlinedChips onClick={this.filter} name="Simple Glasses" />
                {/* <OutlinedChips onClick={this.filter} name="All Products" /> */}

                </div>

                <br />
                <br />

                {products.map((val, i) =>

                    <RecipeReviewCard key={i} onClick={this.goToProduct} img={val.img} rs={val.price} name={val.productname} About={val.description} />
                )}


            </div>

        );
    }
}

export default Home;
