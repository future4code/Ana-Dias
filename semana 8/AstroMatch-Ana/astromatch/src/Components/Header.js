import React from 'react';
import './Header.css';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ForumIcon from '@material-ui/icons/Forum';
import WhatshotIcon from '@material-ui/icons/Whatshot';

function Header () {
  return (

    <div className="header">
      
      <AccountBoxIcon />
      
      
      <WhatshotIcon />
      
      <ForumIcon />
      
      
    </div>
  );
}

export default Header