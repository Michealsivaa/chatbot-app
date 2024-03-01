
import Grid from '@mui/material/Grid';
import SideBar from "../../components/Sidebar/sidebar";
import { Outlet } from "react-router";


import useStyles from './styles';

const MainLayout = () => {
  const {dashboardContentSection, dashboardSection } = useStyles();
  return (
    <>
      <Grid container className={dashboardSection}>
        <Grid item xs={12} sm={12} md={3.5} lg={3} xl={3} ><SideBar /></Grid>
        <Grid item xs={12} sm={12} md={8.5} lg={9} xl={9} className={dashboardContentSection}><Outlet /></Grid>
      </Grid>
    </>
  );
};
export default MainLayout;
