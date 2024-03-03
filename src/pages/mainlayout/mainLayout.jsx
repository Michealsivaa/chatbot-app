
import Grid from '@mui/material/Grid';
import SideBar from "../../components/Sidebar/sidebar";
import { Outlet,useLocation } from "react-router";


import useStyles from './styles';
import Breadcrumbs from '../../components/Breadcrumbs/breadCrumbs';

const MainLayout = () => {
  const {dashboardContentSection, dashboardSection } = useStyles();
  const location = useLocation();


  const isHomePage = location.pathname === '/home';
  const isTopicArea = location.pathname === '/topicarea'
  return (
    <>
      <Grid container className={dashboardSection}>
        <Grid item xs={12} sm={12} md={3.5} lg={3} xl={3} ><SideBar /></Grid>
        <Grid item xs={12} sm={12} md={8.5} lg={9} xl={9} className={dashboardContentSection}>{!isHomePage && !isTopicArea && <Breadcrumbs />}<Outlet /></Grid>
      </Grid>
    </>
  );
};
export default MainLayout;
