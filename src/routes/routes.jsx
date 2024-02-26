import { Routes, Route } from "react-router-dom";
import SideBar from "../components/Sidebar/sidebar";
import Grid from '@mui/material/Grid';
import useStyles from "./styles";
import HomePage from "../pages/homepage";
import TopicArea from "../pages/topicarea";


const HR_Routes = () => {
  const {
    dashboardSection,
    dashboardContentSection
  } = useStyles();
  return (
    <>
      <Grid container className={dashboardSection}>
        <Grid item xs={12} sm={12} md={3.5} lg={3} xl={3} ><SideBar /></Grid>
        <Grid item xs={12} sm={12} md={8.5} lg={9} xl={9} className={dashboardContentSection}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/topicarea" element={<TopicArea />} />
          </Routes>
        </Grid>
      </Grid>
    </>

  );
};

export default HR_Routes;
