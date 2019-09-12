import React from "react";
import Popup from "reactjs-popup";
import {FaCartPlus, FaHeart} from "react-icons/fa"

  const Card = ({ title }) => (
  <div className="card">
    <div className="header">{title} position </div>
    <div className="content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit autem
      sapiente labore architecto exercitationem optio quod dolor cupiditate
    </div>
  </div>
);
const ToolTipPositions = () => (
  <div className="example-warper">
   
    <Popup
      trigger={<FaCartPlus/>}
      position="left bottom"
      on="hover"
    >
<h6>Your shoping card is Empty</h6>

      {/* <Card title="Left Bottom" /> */}
    </Popup>
  </div>
);

export default Card;