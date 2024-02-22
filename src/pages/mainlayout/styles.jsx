import { makeStyles } from "@mui/styles";
import muiTheme from "../../themes/muiTheme";

const useStyles = makeStyles({
    sidebarSection: {
       
    },
    dashboardContentSection: {
        height: 'calc(100vh - 0px)',
        overflow: "auto",
        minHeight: "100%",
        padding: 48,
        background: '#f3f4f6',
        [muiTheme.breakpoints.down(1024)]: {
            height: 'inherit',
            padding: 30,
          },
    }
});

export default useStyles;