import React from 'react'
import Grid from '@mui/material/Grid';
import { Box, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HeaderStyles from '../Header/styles';


const menuItem = [
    { content: "Home", id: "home" },
    { content: "About", id: "abt" },
    { content: "Blog", id: "blog" },
    { content: "Contact", id: "contact" },
]

const HeaderMenu = () => {
    const {menuStyle, addvStyle, headerMain, headLogo, headerButton} = HeaderStyles();

    return (
        <Grid container spacing={2} direction="row" alignItems="center" className={headerMain}>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={12} display="flex">
                <Typography className={headLogo}>HR<span className={addvStyle}>ADVISOR</span></Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={9} xl={12} className={menuStyle}>
                {
                    menuItem.map((item) => (
                        <li>{item.content}</li>
                    ))
                }
                <Box display="flex" justifyContent="right">
                <Button variant="contained" className={headerButton}>Launch HRADVISOR</Button>
                </Box>
            </Grid>
        </Grid>
    )
}

export default HeaderMenu