import React from 'react'
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const menuItem = [
    { content: "Home", id: "home" },
    { content: "About", id: "abt" },
    { content: "Blog", id: "blog" },
    { content: "Contact", id: "contact" },
]

const menuStyle = {
    listStyle: "none",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
}

function HeaderMenu() {
    return (
        <Grid container spacing={2} direction="row" alignItems="center" sx={{ padding: 1, background: "#2e394b", color: "#fff" }}>
            <Grid item xs={12} sm={12} md={6} lg={2} xl={12}>
                <Typography sx={{ minWidth: 100, fontSize: "40px" }}>HR<span className='addv-style'>ADVISOR</span></Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={7} xl={12} style={menuStyle}>
                {
                    menuItem.map((item) => (
                        <li>{item.content}</li>
                    ))
                }
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={12} alignItems="center" display="flex" justifyContent="right">
                <Button variant="contained" sx={{textTransform: "none", background: "#f54806", borderRadius: "14px", fontSize: "20px"}}>Launch HRADVISOR</Button>
            </Grid>
        </Grid>
    )
}

export default HeaderMenu