import React from 'react'
import LoginForm from './loginForm'
import Grid from '@mui/material/Grid';
import Header from '../Header/headerMenu'
import FooterMenu from '../Footer';
import LoginStyle from './style'



const LogIn = () => {
  const { commonBgStyle } = LoginStyle();

  return (
    <>
      <Header />      
        <Grid container spacing={2} className={commonBgStyle}>
            <Grid item xs={12} lg={4} xl={12}>
            </Grid>
            <Grid item xs={12} lg={4} xl={12} sx={{ lineHeight: "30px", background: "#fff", color: "#000", padding: 2, borderRadius: 2 }}>
                <LoginForm />
            </Grid>
            <Grid item xs={12} lg={4} xl={12}>
            </Grid>
        </Grid>
        <FooterMenu />
        </>  
  )
}

export default LogIn