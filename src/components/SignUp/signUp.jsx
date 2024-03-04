import React from 'react'
import Grid from '@mui/material/Grid';
import SignUpForm from './signUpForm';
import Header from '../Header';
import FooterMenu from '../Footer';

const SignUp = () => {
  return (
    <>
      <Header />
      <Grid container spacing={2} sx={{ padding: 4, background: "#f3f4f6", mt: 0, mb: 2 }}>
        <Grid item xs={12} lg={4} xl={12}>
        </Grid>
        <Grid item xs={12} lg={4} xl={12} sx={{ lineHeight: "30px", background: "#fff", color: "#000", padding: 2, borderRadius: 2 }}>
          <SignUpForm />
        </Grid>
        <Grid item xs={12} lg={4} xl={12}>
        </Grid>
      </Grid>
      <FooterMenu />
    </>
  )
}

export default SignUp