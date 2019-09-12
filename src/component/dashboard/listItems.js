import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { MdModeEdit,MdAddShoppingCart,MdDeleteForever } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { MDBBtn } from "mdbreact";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Link} from 'react-router-dom'


export const mainListItems = (
  <div>

    <Link to="/addcart">
    <ListItem button>
      <ListItemIcon>
        <MdAddShoppingCart fontSize="24px" />
      </ListItemIcon>
      <ListItemText primary="Add product" />
    </ListItem>
    </Link>

    <Link to="/admin">
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItem>
    </Link>


    <Link to="/customers">
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItem>
    </Link>

      
    {/* <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem> */}

<Link to="editproduct">
    <ListItem button>
      <ListItemIcon>
        
        <MdModeEdit fontSize="24px" />
      </ListItemIcon>
      <ListItemText primary="Edit product" />
    </ListItem>
</Link>
 
  </div>
);


export const secondaryListItems = (
  <div>
    <ListSubheader style={{textAlign:"center"}} ><AccountCircleIcon style={{fontSize:"40px"}}  />
  <br />  suneel kumar
    </ListSubheader>
    <ListItem button textAlign="center">
    
      <ListItemIcon>
        <MdModeEdit fontSize="24px" />
        
      </ListItemIcon>
      Edit account
      <ListItemText primary="" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MdDeleteForever fontSize="24px" />
      </ListItemIcon>
      Delete account
      <ListItemText primary="" />
    </ListItem>
      <p style={{textAlign:"center"}}>
      <MDBBtn color="primary" rounded style={{marginTop:"20px"}}> <IoIosLogOut /> LOGOUT</MDBBtn>
      </p>
      <ListItemText primary="" />
  </div>
);