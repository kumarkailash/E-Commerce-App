import React from "react"
import Admin from './admin'
import Textfield from './textfield'
import Button from '@material-ui/core/Button';
import firebase from "./../../confing/firebase/firebase"


// import upload from '../image/upload.png'
export default class Addproduct extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }
    handleFile = e => {
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    };



    async imageUpload(e) {
        let fileName = e.target.files[0].name
        let ref = firebase.storage().ref('/').child(`images/${fileName}`)
        await ref.put(e.target.files[0])
        ref.getDownloadURL()
            .then((url) => {
                console.log(url)
                this.setState({
                    img: url,
                })
            })

    }


    AddProducts() {
        firebase.firestore().collection("Products").add(this.state)
    }


    render() {
        let { productimage } = this.state
        console.log(this.state)
        return (
            <div>
                <Admin />
                <div style={{ width: "37%", margin: "auto", padding: "10px 15px 10px 0px", textAlign: "center", }}>
                   
                    <Textfield type="text" value="product name" onChange={(e) => this.setState({ productname: e.target.value })} />
                    <Textfield type="text" value="Category" onChange={(e) => this.setState({category: e.target.value })} />

                    <Textfield type="number" value="product price" onChange={(e) => this.setState({ price: e.target.value })} />
                    
                    <Textfield type="text" value="describe in detail" onChange={(e) => this.setState({ description: e.target.value })} />
                    <Textfield type="file" onChange={this.imageUpload.bind(this)} />
                    {/* <Textfield type="text" value="Enter Picture Url"  onChange={(e)=>this.setState({productimage:e.target.value})} /> */}

                    <input
                        style={{ display: "none" }}
                        accept="image/*"
                        id="contained-button-file"
                        type="file"
                        name="productimage"
                        value={this.state.productimage}
                        onChange={this.handleFile}
                    />
                    <label htmlFor="contained-button-file">



                        {/* <Button color="darkslategray" variant="contained" component="span" style={{marginLeft:"16%"}} >
                          upload an image
                        </Button>  */}

                        <Button variant="contained" onClick={this.AddProducts.bind(this)} color="primary" style={{ padding: "10px", width: "100px", marginTop: "20px", float: "right", backgroundColor: "#06351f" }}>
                            POST
      </Button>

                    </label>

                </div>
            </div>
        )
    }
}