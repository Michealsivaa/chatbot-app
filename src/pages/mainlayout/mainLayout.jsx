
import Grid from '@mui/material/Grid';
import SideBar from "../../components/Sidebar/sidebar";
import HomePage from "../homepage";
import useStyles from './styles';

const MainLayout = () => {
  const { sidebarSection, dashboardContentSection } = useStyles();
  return (
    <>
    <Grid container>
      <Grid item xs={12} sm={12} md={2.9} lg={2.9} xl={2.9} className={sidebarSection}><SideBar /></Grid>
      <Grid item xs={12} sm={12} md={9.1} lg={9.1} xl={9.1} className={dashboardContentSection}><HomePage /></Grid>
    </Grid>
    </>
  );
};
export default MainLayout;
