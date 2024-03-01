import { makeStyles } from "@mui/styles";
import muiTheme from "../../themes/muiTheme";

const useStyles = makeStyles({
  breadcrumbStyle: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: 16,
    left: 16,
    border: '1px solid #aaaaaa',
    padding: '5px 12px',
    fontSize: '14px',
    lineHeight: '21px',
    color: '#494949'
  }
});
export default useStyles;
