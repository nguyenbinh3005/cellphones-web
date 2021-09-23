import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  boxSliding: {
    height: '390px',
    width: '1200px',
    display: 'flex',
  },
  boxSlidingLeft: {
    backgroundColor: 'white',
    width: '200px',
    height: '380px',
  },
  menuItem: {
    paddingTop: '5px',
    textAlign: 'center',
    marginLeft: '-40px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgb(255,240,255)',
    },
    height: '26px',
  },
  everyItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  everyItemLeft: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '10px',
  },
  nameItem: {
    fontSize: '12px',
    fontFamily: 'arial',
    fontWeight: 'Bold',
    marginLeft: '5px',
  },

  // center
  boxSlidingCenter: {
    width: '700px',
    height: '305px',
    backgroundColor: 'white',
    margin: '0px 15px',
  },
  namePosterGroup: {
    width: '700px',
    height: '71px',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
  },
  namePoster: {
    width: '140px',
    textAlign: 'center',
  },
  namePoster1: {
    fontSize: '12px',
    fontFamily: 'arial',
  },
  namePoster2: {
    fontSize: '12px',
    fontFamily: 'arial',
  },

  //Left
  boxSlidingRight: {
    width: '265px',
    height: '380px',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}));
