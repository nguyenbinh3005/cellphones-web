import React from 'react';
import useStyles from './styles';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import LaptopMacOutlinedIcon from '@mui/icons-material/LaptopMacOutlined';
import TabletMacOutlinedIcon from '@mui/icons-material/TabletMacOutlined';
import WatchOutlinedIcon from '@mui/icons-material/WatchOutlined';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import EvStationOutlinedIcon from '@mui/icons-material/EvStationOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import SimCardOutlinedIcon from '@mui/icons-material/SimCardOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import poster1 from '../../images/poster1.png';
import posterRight1 from '../../images/posterRight1.png';
import posterRight2 from '../../images/posterRight2.png';
import posterRight3 from '../../images/posterRight3.png';
import posterCenter from '../../images/posterCenter.png';

export default function BoxSliding() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.boxSliding}>
        <div className={classes.boxSlidingLeft1}>
          <ul
            style={{
              listStyleType: 'none',
              margin: '0px',
            }}
          >
            <li className={classes.menuItem}>
              <div className={classes.everyItem}>
                <div className={classes.everyItemLeft}>
                  <PhoneIphoneOutlinedIcon />
                  <span className={classes.nameItem}>Điện thoại</span>
                </div>
                <ChevronRightIcon style={{ fontSize: '15px' }} />
              </div>
            </li>
            <li className={classes.menuItem}>
              <div className={classes.everyItem}>
                <div className={classes.everyItemLeft}>
                  <LaptopMacOutlinedIcon />
                  <span className={classes.nameItem}>Laptop, PC, Màn hình</span>
                </div>
                <ChevronRightIcon style={{ fontSize: '15px' }} />
              </div>
            </li>
            <li className={classes.menuItem}>
              <div className={classes.everyItem}>
                <div className={classes.everyItemLeft}>
                  <TabletMacOutlinedIcon />
                  <span className={classes.nameItem}>Tablet</span>
                </div>
                <ChevronRightIcon style={{ fontSize: '15px' }} />
              </div>
            </li>
            <li className={classes.menuItem}>
              <div className={classes.everyItem}>
                <div className={classes.everyItemLeft}>
                  <MusicNoteOutlinedIcon />
                  <span className={classes.nameItem}>Âm thanh</span>
                </div>
                <ChevronRightIcon style={{ fontSize: '15px' }} />
              </div>
            </li>
            <li className={classes.menuItem}>
              <div className={classes.everyItem}>
                <div className={classes.everyItemLeft}>
                  <WatchOutlinedIcon />
                  <span className={classes.nameItem}>Đồng hồ</span>
                </div>
                <ChevronRightIcon style={{ fontSize: '15px' }} />
              </div>
            </li>
            <li className={classes.menuItem}>
              <div className={classes.everyItem}>
                <div className={classes.everyItemLeft}>
                  <HouseOutlinedIcon />
                  <span className={classes.nameItem}>Nhà thông minh</span>
                </div>
                <ChevronRightIcon style={{ fontSize: '15px' }} />
              </div>
            </li>
            <li className={classes.menuItem}>
              <div className={classes.everyItem}>
                <div className={classes.everyItemLeft}>
                  <EvStationOutlinedIcon />
                  <span className={classes.nameItem}>Phụ kiện</span>
                </div>
                <ChevronRightIcon style={{ fontSize: '15px' }} />
              </div>
            </li>
            <li className={classes.menuItem}>
              <div className={classes.everyItem}>
                <div className={classes.everyItemLeft}>
                  <LocalAtmOutlinedIcon />
                  <span className={classes.nameItem}>Thu Cũ</span>
                </div>
                <ChevronRightIcon style={{ fontSize: '15px' }} />
              </div>
            </li>
            <li className={classes.menuItem}>
              <div className={classes.everyItem}>
                <div className={classes.everyItemLeft}>
                  <DonutLargeOutlinedIcon />
                  <span className={classes.nameItem}>Hàng cũ</span>
                </div>
                <ChevronRightIcon style={{ fontSize: '15px' }} />
              </div>
            </li>
            <li className={classes.menuItem}>
              <div className={classes.everyItem}>
                <div className={classes.everyItemLeft}>
                  <SimCardOutlinedIcon />
                  <span className={classes.nameItem}>Sim Thẻ</span>
                </div>
                <ChevronRightIcon style={{ fontSize: '15px' }} />
              </div>
            </li>
            <li className={classes.menuItem}>
              <div className={classes.everyItem}>
                <div className={classes.everyItemLeft}>
                  <ReceiptOutlinedIcon />
                  <span className={classes.nameItem}>Tin công Nghệ</span>
                </div>
                <ChevronRightIcon style={{ fontSize: '15px' }} />
              </div>
            </li>
            <li className={classes.menuItem}>
              <div className={classes.everyItem}>
                <div className={classes.everyItemLeft}>
                  <LocalOfferOutlinedIcon />
                  <span className={classes.nameItem}>Khuyến mại</span>
                </div>
                <ChevronRightIcon style={{ fontSize: '15px' }} />
              </div>
            </li>
          </ul>
        </div>
        <div className={classes.boxSlidingLeft2}>
          <ul
            style={{
              listStyleType: 'none',
              margin: '0px',
            }}
          >
            <li className={classes.menuItem}>
              <div className={classes.everyItem}>
                <div className={classes.everyItemLeft}>
                  <span className={classes.nameItem}>Apple</span>
                </div>
                <ChevronRightIcon style={{ fontSize: '15px' }} />
              </div>
            </li>
            <li className={classes.menuItem}>
              <div className={classes.everyItem}>
                <div className={classes.everyItemLeft}>
                  <span className={classes.nameItem}>Samsung</span>
                </div>
                <ChevronRightIcon style={{ fontSize: '15px' }} />
              </div>
            </li>
            <li className={classes.menuItem}>
              <div className={classes.everyItem}>
                <div className={classes.everyItemLeft}>
                  <span className={classes.nameItem}>Xiaomi</span>
                </div>
                <ChevronRightIcon style={{ fontSize: '15px' }} />
              </div>
            </li>
            <li className={classes.menuItem}>
              <div className={classes.everyItem}>
                <div className={classes.everyItemLeft}>
                  <span className={classes.nameItem}>Oppo</span>
                </div>
                <ChevronRightIcon style={{ fontSize: '15px' }} />
              </div>
            </li>
            <li className={classes.menuItem}>
              <div className={classes.everyItem}>
                <div className={classes.everyItemLeft}>
                  <span className={classes.nameItem}>Nokia</span>
                </div>
                <ChevronRightIcon style={{ fontSize: '15px' }} />
              </div>
            </li>
            <li className={classes.menuItem}>
              <div className={classes.everyItem}>
                <div className={classes.everyItemLeft}>
                  <span className={classes.nameItem}>Realme</span>
                </div>
                <ChevronRightIcon style={{ fontSize: '15px' }} />
              </div>
            </li>
            <li className={classes.menuItem}>
              <div className={classes.everyItem}>
                <div className={classes.everyItemLeft}>
                  <span className={classes.nameItem}>Vsmart</span>
                </div>
                <ChevronRightIcon style={{ fontSize: '15px' }} />
              </div>
            </li>
            <li className={classes.menuItem}>
              <div className={classes.everyItem}>
                <div className={classes.everyItemLeft}>
                  <span className={classes.nameItem}>ASUS</span>
                </div>
                <ChevronRightIcon style={{ fontSize: '15px' }} />
              </div>
            </li>
            <li className={classes.menuItem}>
              <div className={classes.everyItem}>
                <div className={classes.everyItemLeft}>
                  <span className={classes.nameItem}>Vivo</span>
                </div>
                <ChevronRightIcon style={{ fontSize: '15px' }} />
              </div>
            </li>
            <li className={classes.menuItem}>
              <div className={classes.everyItem}>
                <div className={classes.everyItemLeft}>
                  <span className={classes.nameItem}>OnePlus</span>
                </div>
                <ChevronRightIcon style={{ fontSize: '15px' }} />
              </div>
            </li>
            <li className={classes.menuItem}>
              <div className={classes.everyItem}>
                <div className={classes.everyItemLeft}>
                  <span className={classes.nameItem}>POCO</span>
                </div>
                <ChevronRightIcon style={{ fontSize: '15px' }} />
              </div>
            </li>
            <li className={classes.menuItem}>
              <div className={classes.everyItem}>
                <div className={classes.everyItemLeft}>
                  <span className={classes.nameItem}>Nubia</span>
                </div>
                <ChevronRightIcon style={{ fontSize: '15px' }} />
              </div>
            </li>
            <li className={classes.menuItem}>
              <div className={classes.everyItem}>
                <div className={classes.everyItemLeft}>
                  <span className={classes.nameItem}>Điện thoại phổ thông</span>
                </div>
                <ChevronRightIcon style={{ fontSize: '15px' }} />
              </div>
            </li>
            <li className={classes.menuItem}>
              <div className={classes.everyItem}>
                <div className={classes.everyItemLeft}>
                  <span className={classes.nameItem}>Tin đồn - M</span>
                </div>
                <ChevronRightIcon style={{ fontSize: '15px' }} />
              </div>
            </li>
          </ul>
        </div>

        {/* <div className={classes.boxSlidingCenter}>
          <img src={poster1} alt="" width="700px" height="305px"></img>
          <div className={classes.namePosterGroup}>
            <div className={classes.namePoster}>
              <span className={classes.namePoster1}>GIAO HÀNG NHANH 1H</span>
              <br />
              <span className={classes.namePoster2}>Mua nhiều giảm nhiều</span>
            </div>
            <div className={classes.namePoster}>
              <span className={classes.namePoster1}>SẮM APPLE WATCH</span>
              <br />
              <span className={classes.namePoster2}>Ưu đãi hấp dẫn</span>
            </div>
            <div className={classes.namePoster}>
              <span className={classes.namePoster1}>REDMI 10 SERIES</span>
              <br />
              <span className={classes.namePoster2}>Giá tốt quá ngon</span>
            </div>
            <div className={classes.namePoster}>
              <span className={classes.namePoster1}>GALAXY WATCH 4</span>
              <br />
              <span className={classes.namePoster2}>
                Đặt trước ưu đãi khủng
              </span>
            </div>
            <div className={classes.namePoster}>
              <span className={classes.namePoster1}>ASUS GAMING</span>
              <br />
              <span className={classes.namePoster2}>Ưu đãi mùa tựu trường</span>
            </div>
          </div>
        </div>
        <div className={classes.boxSlidingRight}>
          <img src={posterRight1} alt="" width="265px" />
          <img src={posterRight2} alt="" width="265px" />
          <img src={posterRight3} alt="" width="265px" />
        </div> */}
      </div>
      <img src={posterCenter} alt="" />
    </div>
  );
}
