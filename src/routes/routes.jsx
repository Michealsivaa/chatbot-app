import { Routes, Route, useRoutes, Navigate} from "react-router-dom";
import SideBar from "../components/Sidebar/sidebar";
import Grid from '@mui/material/Grid';
import useStyles from "./styles";
import HomePage from "../pages/homepage";
import TopicArea from "../pages/topicarea";
import QuickPrompts from "../pages/quickprompts";
import Breadcrumbs from "../components/Breadcrumbs/breadCrumbs";
import Quickpromptslist from "../pages/quickpromptslist";
import { Link, useLocation } from 'react-router-dom';
import SignUp from "../components/SignUp/signUp";
import MainLayout from "../pages/mainlayout";
import LogIn from "../components/Login";
import ForgotPassword from "../components/ForgotPassword";
import ChangePassword from "../components/ChangePassword";



const HR_Routes = () => {
  const {
    dashboardSection,
    dashboardContentSection
  } = useStyles();
  const location = useLocation();

  const user = true;

  const isHomePage = location.pathname === '/';
  const isTopicArea = location.pathname === '/topicarea'
  // return (
  //   <>
  //     <Grid container className={dashboardSection}>
  //       <Grid item xs={12} sm={12} md={3.5} lg={3} xl={3} ><SideBar /></Grid>
  //       <Grid item xs={12} sm={12} md={8.5} lg={9} xl={9} className={dashboardContentSection}>
       
  //         <Routes>
  //           <Route path="/" element={<HomePage />} />
  //           <Route path="/topicarea" element={<TopicArea />} />
  //           <Route path="/quickprompts" element={<QuickPrompts />} />
  //           <Route path="/quickpromptslist" element={<Quickpromptslist />} />
  //         </Routes>
  //       </Grid>
  //     </Grid>
  //   </>

  // );
  return useRoutes([
    {
      path: "/login",
      element: <LogIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/forgotpassword",
      element: <ForgotPassword />,
    },
    {
      path: "/changepassword",
      element: <ChangePassword />,
    },
    {
      path: "/",
      element: <Navigate replace to="login" />,
    },
    {
      path: "/",
      element: user ? (
        <MainLayout />
      ) : (
        <Navigate replace to="signin" />
      ),
      children: [
        {
          path: "home",
          element: <HomePage />,
        },
        {
          path: "topicarea",
          element: <TopicArea />,
        },
        {
          path: "quickprompts",
          element: <QuickPrompts />,
        },
      ],
    },
    {
      path: "*",
      element: <div>No Route Found</div>,
    },
  ]);
};

export default HR_Routes;
