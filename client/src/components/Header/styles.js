import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  banner: {
    height: '30px',
    backgroundColor: '#444444',
    color: 'white',
    fontStyle: 'italic',
    fontSize: '15px',
  },
  container: {
    backgroundColor: '#d70018',
  },
  toolgroup: {
    backgroundColor: '#d70018',
    color: 'white',
    height: '65px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 150px',
  },
  toolgroup1: {
    display: 'flex',
  },
  menu: {
    height: '35px',
    width: '35px',
  },
  namebranch: {
    display: 'flex',
    marginLeft: '10px',
    textDecoration: 'none',
    color: 'white',
  },
  namepage: {
    fontSize: '25px',
    marginBottom: '10px',
  },
  logo: {
    height: '25px',
    width: '25px',
    marginTop: '7px',
  },
  dropdown: {
    height: '38px',
    width: '110px',
    fontSize: '12px',
    marginTop: '8px',
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    width: '400px',
    height: '40px',
  },
  iconButton: {
    padding: 10,
    color: '#3c3d41',
  },
  contact: {
    display: 'flex',
    alignItems: 'center',
  },
  iconContact: {
    fontSize: '30px',
  },
  sdt: {
    fontWeight: 'bold',
  },
  location: {
    display: 'flex',
    alignItems: 'center',
  },
  iconLocation: {
    fontSize: '25px',
  },
  cart: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'white',
  },
  iconCart: {
    fontSize: '30px',
  },
}));
