import React from 'react';
import './Buttons.css';
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRateIcon";
import FavoriteIcon from "@material-ui/icons/FavoriteIcon";


const Buttons = () => {
  return(
    <div className="Buttons">
      <CloseIcon />
      <StarRateIcon />
      <FavoriteIcon />
    </div>
  )
}

export default Buttons;