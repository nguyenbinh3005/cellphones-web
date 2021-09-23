import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  productScreen: {
    marginTop: '95px',
    backgroundColor: 'white',
  },
  body: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
  },
  title: {
    width: '1200px',
    height: '50px',
    marginTop: '40px',
    fontWeight: 'bold',
    fontFamily: 'arial',
    fontSize: '21px',
  },
  left: {
    width: '840px',
    height: '728px',
    display: 'flex',
  },
  imgProduct: {
    width: '406px',
    height: '400px',
  },
  inforProduct: {
    paddingTop: '50px',
  },
  priceProduct: {
    color: '#e11b1e',
    fontFamily: 'arial',
    fontWeight: 'bold',
    fontSize: '25px',
  },
  addCart: {
    background: 'linear-gradient(45deg,#f52f32,#e11b1e)',
    width: '405px',
    height: '54px',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    marginTop: '30px',
    textDecoration: 'none',
    color: 'white',
  },
  titleAddCart1: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'arial',
  },
  titleAddCart2: {
    color: 'white',
    fontFamily: 'arial',
  },
  right: {
    width: '360px',
    height: '728px',
  },
}));
