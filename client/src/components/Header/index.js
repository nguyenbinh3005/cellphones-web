import React from 'react';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { IconButton, InputBase, Paper, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import PhoneIcon from '@mui/icons-material/Phone';
import RoomIcon from '@mui/icons-material/Room';
import LocalMallIcon from '@mui/icons-material/LocalMall';

import logo from '../../images/logo.png';

export default function Header() {
  const classes = useStyles();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <div>
      <Typography variant="h6" align="center" className={classes.banner}>
        Giao hàng nhanh 1h (xem chi tiết)
      </Typography>
      <div className={classes.container}>
        <div className={classes.toolgroup}>
          <div className={classes.toolgroup1}>
            <MenuOutlinedIcon className={classes.menu} />
            <Link to="/" className={classes.namebranch}>
              <div className={classes.namepage}>cellphone</div>
              <img src={logo} alt="" className={classes.logo} />
            </Link>
          </div>
          <div className={classes.dropdown}>
            <div style={{ fontSize: '10px' }}>Xem giá, tồn kho tại:</div>
            <div>Hồ Chí Minh</div>
          </div>
          <Paper component="form" className={classes.search}>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Bạn cần tìm gì?"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
          <div className={classes.contact}>
            <PhoneIcon className={classes.iconContact} />
            <div>
              <div>Gọi mua hàng:</div>
              <div className={classes.sdt}>1800.2097</div>
            </div>
          </div>
          <div className={classes.location}>
            <RoomIcon className={classes.iconLocation} />
            <div>Tìm cửa hàng</div>
          </div>
          <Link to="/checkout/cart" className={classes.cart}>
            <Badge badgeContent={cartItems.length} color="error">
              <LocalMallIcon className={classes.iconCart} />
            </Badge>
            <div>Giỏ hàng</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
