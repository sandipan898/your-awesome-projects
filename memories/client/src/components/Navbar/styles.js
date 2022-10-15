import { makeStyles } from "@mui/styles";
import { deepPurple } from '@mui/material/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row !important',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
    height: "50px",
    width: "50px",
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },

  [theme.breakpoints.down('sm')]: {
    heading: {
      fontSize: "2.75rem !important",
    },
    image: {
      marginLeft: '15px',
      height: "40px",
      width: "40px",
    },
    appBar: {
      margin: '30px 0 !important',
      flexDirection: 'column !important',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px  !important',
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'center',
      width: '100% !important',
    },
    userName: {
      fontSize: '1rem !important'
    },
  },
}));