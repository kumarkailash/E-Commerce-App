import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import { MdShoppingCart } from 'react-icons/md';


// import laptopImg from "./../../images/laptop.jpg"
// import { FaShoppingCart,FaRegHeart } from "react-icons/fa";


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 445,
    display:'inline-block',
    margin:"30px",
    width:"250px",
    height:"500px",
  fontFamily:'Hepta Slab, serif'

  },
  media: {
    width: "250px ",
    height: "200px",
    // border:"2px solid",
    paddingTop: '56.25%'
    
  },
  expand: {

    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {

    transform: 'rotate(180deg)',
  },
  avatar: {
    display: "inline",

    backgroundColor: red[500],
  },
}));


export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);


  function onClick() {
    let data = {
      image: props.img,
      name: props.name,
      about: props.About,
      rs: props.rs

    }
    props.onClick(data)

  }


  return (
    <Card  className={classes.card}
      onClick={onClick}
    >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            AW
          </Avatar>
        }

        title={props.name}
      // subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image={props.img}
        title={props.name}
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <h2 style={{ color: "blue" }}>
            Rs:  {props.rs}
          </h2>
        </Typography>

      </CardContent>

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">

          {props.About}

        </Typography>

      </CardContent>


      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Button size="large" style={{ color: "#fff", backgroundColor: "#9C27B0", marginTop: "30px" }}>
          <MdShoppingCart />Add to Cart
        </Button>

      </CardActions>
    </Card>
  );
}






// import React from "react";
// import { MDBView, MDBMask, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, } from 'mdbreact';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import Button from '@material-ui/core/Button';
// import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';
// const CardExample = (props) => {
 
//   return (
//     <MDBCard 
//       style={{
//         width: "21.6rem", display: 'inline-block',
//         margin: '11px', cursor: 'pointer'
//       }}>
//         <div onClick={() => props.path.history.push('product', {
//       title: props.name,
//       url: props.img,
//       price: props.rs,
//       description: props.about
//     })}>


//       <MDBView hover zoom>
//         <img
//           src={props.img}
//           className="img-fluid"
//           alt="product"
//           style={{ cursor: 'pointer' }}
//         />
//         <MDBMask className="flex-center">
//         </MDBMask>
//       </MDBView>
//       <MDBCardBody>
//         <MDBCardTitle>{props.catogory}</MDBCardTitle>
//         <MDBCardText>
//           {props.About}
//         </MDBCardText>
//         <h5 className="black-text ">Price : {props.rs}</h5>
//         {props.rating}

        
//         <Button size='small' color='secondary' variant='outlined'>
//           <ShoppingCartIcon /> Add To Cart
//         </Button>
//         <Button size='small' style={{ marginLeft: '4px' }} color='secondary' variant='outlined'>
//           <FavoriteSharpIcon /> Whishlist
//         </Button>
//       </MDBCardBody>
//       </div>


//     </MDBCard>
//   )
// }

// export default CardExample;