import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  cartScreen: {
    marginTop: '95px',
    backgroundColor: 'white',
  },
  cartItem: {
    height: '180px',
    width: '600px',
    margin: '60px auto',
    display: 'flex',
  },
  left: {
    height: '150px',
    width: '150px',
  },
  right: {
    height: '220px',
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
  },
  actions: {
    marginTop: '20px',
    display: 'flex',
  },
  count: {
    width: '40px',
    height: '30px',
    border: '1px solid #555',
    outline: 'none',
    background: 'transparent',
    cursor: 'pointer',
  },
  amount: {
    padding: '0 15px',
    color: '#e11b1e',
  },
}));
