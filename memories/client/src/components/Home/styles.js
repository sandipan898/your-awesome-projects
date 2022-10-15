import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  
  heading: {
    color: "rgba(0,183,255, 1)",
  },
  image: {
    marginLeft: "15px",
    height: "50px",
    width: "50px",
  },
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: "column-reverse !important"
    }
  }
}));
