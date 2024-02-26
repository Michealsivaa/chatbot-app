import { makeStyles } from "@mui/styles";
import muiTheme from "../themes/muiTheme";

const useStyles = makeStyles({
    dashboardContentSection: {
        minHeight: "100%",
        background: '#f3f4f6',
        position: 'relative',
        [muiTheme.breakpoints.down(1024)]: {
           
          },
    },
    dashboardSection: {
        height: '100vh',
        [muiTheme.breakpoints.down(900)]: {
            height: 'calc(100vh - 164px)',
            overflow: 'auto'
        },
    },
});

export default useStyles;