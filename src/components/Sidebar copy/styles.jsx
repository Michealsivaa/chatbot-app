import { makeStyles } from "@mui/styles";
import muiTheme from "../../themes/muiTheme";

const useStyles = makeStyles({
  menuLogo: {
    fontSize: '42px !important',
    lineHeight: '38px !important',
    fontWeight: 200,
    color: 'white !important',
    fontFamily: `'Almarai', sans-serif !important`,
    '& span': {
        fontWeight: 900
    }
  },
  sideNavigation:{
    "& .MuiDrawer-paper": {
      background: "#2e394b !important",
      borderRight: "1px solid #EFF4FA",
      borderRadius: "0px",
      padding: "20px",
      height: "calc(100vh - 41px)",
      position: 'relative',
      [muiTheme.breakpoints.down(900)]: {
        height: 'inherit',
      },
    },
  },
  flex1: {
    flex: 1
  },
  upgradeSection: {
    '& :nth-child(1)': {
      fontSize: '16px',
      fontWeight: '600',
      color: 'white',
      lineHeight: '24px',
      marginBottom: 4
    },
    '& :nth-child(2)': {
      fontSize: '16px',
      fontWeight: '600',
      color: '#fa430a',
      lineHeight: '24px'

    }
  },
  avatharSection: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    fontSize: '16px',
      fontWeight: '600',
    '& .MuiAvatar-root': {
      marginRight: 14,
    }
  },
  documentSection: {
    borderBottom: '2px solid #4e5f6f',
    padding: '12px 0',
  },
  innerMenuSection : {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    padding: '10px 0',
    '& .MuiSvgIcon-root': {
      marginRight: 14
    }
  },
  fileUploadSection: {
    borderBottom: '2px solid #4e5f6f',
    padding: '12px 0',
    color: 'white'
  },
  listItemTitle: {
    padding:' 0 !important',
    '& .MuiTypography-root': {
      fontSize: '12px !important',
      lineHeight: "21px",
      color:'white',
      [muiTheme.breakpoints.down(768)]: {
        fontSize: '16px !important',
        lineHeight: '24px'
        },
    }
  },
  menuLogoSection:{
    marginBottom: 46,
    "& img": {
      width: 68,
    },
  },
  previousText: {
    fontSize: '14px',
    color: '#7c929f'
  },
  listSection: {
    borderBottom: '2px solid #4e5f6f',
    paddingBottom: 12,
  },
  footerSection:{
    display: "flex",
    alignItems: 'center',
    padding: 12,
    '& .MuiSvgIcon-root' : {
      color:'white',
      marginRight: 14
    }
    
  },
  menuIconImg:{},
  menuIconSection:{
    flex: 1,
  },
});
export default useStyles;
