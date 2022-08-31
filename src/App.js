import Cart from "C:\\Users\\sanja\\OneDrive\\Desktop\\cart\\my-app\\src\\Components\\Cart.js";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React, { useState } from "react";
function App() {
  const star= <FontAwesomeIcon icon={faStar} style={{color: 'gold'}} />
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));
  return (
    <div className="App">
       <div className="navbar">
        

      <AppBar position="static">
        <Toolbar sx={{
          bgcolor: '#F8F9FA'}}>
           
          <p style={{color: 'black',margin:"20px",fontSize:"25px"}}>Start Bootstrap</p>
          <Button color="inherit"  sx={{color: 'black'}} >Home</Button>
          <Button color="inherit"   sx={{color: '#BCBDBE'}}  >About</Button>
          <Button color="inherit"  sx={{color: '#BCBDBE'}} onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}>Shop</Button>
           <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        // open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
           
          All Products
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
           
         Popular Items
        </MenuItem>
        
        <MenuItem onClick={handleClose} disableRipple>
          
         New Arrivals
        </MenuItem>
       
      </StyledMenu>
      <Button variant="outlined" sx={{  border: "1px solid black",backgroundColor:"white",color:"black","&:hover":{backgroundColor:"black",color:"white"}}}>Cart</Button>
        </Toolbar>
      </AppBar>
      </div>


       <div className="header">
                <h1>Shop in style</h1>
                <p>With this shop homepage template</p>
                </div>
                <div className="middle">
                <Cart   a={"View Options"} b={"Fancy Product"} d={"$40.00 - $80.00"}  star  />
                <Cart a={"Add to cart"} b={"Special Item"} c={"$20.00"} d={" $18.00"}/>
                <Cart a={"Add to cart"} b={"Sale Item"}  c={"$50.00"} d={" $25.00"}/>
                <Cart a={"Add to cart"} b={"Popular Item"} d={"$40.00"}/>

                <Cart a={"Add to cart"} b={"Sale Item"} c={"$50.00"} d={" $25.00"}/>
                <Cart   a={"View Options"} b={"Fancy Product"} d={"$120.00 - $280.00"}/>
                <Cart a={"Add to cart"} b={"Special Item"} c={"$20.00"} d={" $18.00"}/>
               
                <Cart a={"Add to cart"} b={"Popular Item"} d={"$40.00"}/>
                </div>
        <div className="footer">
                    <p>Copyright © Your Website 2022</p>
          </div>
       </div>
     
  );
}

export default App;