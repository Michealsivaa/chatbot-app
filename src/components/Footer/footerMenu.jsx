import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FooterStyles from './styles';
import SocialLogo from './socialLogo';

const footerMenuItem = [
    { content: "About", id: "abt" },
    { content: "News", id: "news" },
    { content: "Contact", id: "contact" },
    { content: "Terms & Conditions", id: "terms" },
    { content: "Privacy Policy", id: "policy" },
]

const FooterMenu = () => {
    const { addvStyle, menuStyle, footerBg, footLogo, connetUs, footerText, footerTextSummary, copyRightText } = FooterStyles();

    return (
        <Grid container spacing={2} direction='row' alignItems="center" className={footerBg}>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={12} display="flex">
                <Typography className={footLogo}>HR<span className={addvStyle}>ADVISOR</span></Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={7} xl={12} className={menuStyle}>
                {
                    footerMenuItem.map((item) => (
                        <li>{item.content}</li>
                    ))
                }
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={2} xl={12} className={connetUs}>
                <h4>Connect With Us</h4>
                <hr></hr>
                <SocialLogo />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={10} xl={12} className={footerText}>
                <Typography className={footerTextSummary}>The materials and information included in the HRADVISOR service are provided for reference prurpose only. They are not intended either as a substiute for professsional<br></br> advice of judgment or to provide legal or other advice with respect to particular circumstances. Use of the service is subject to our terms and conditions.</Typography>
                <Typography className={copyRightText}>Copyright 2024 Solicitech Ltd</Typography>
            </Grid>
        </Grid>
    )
}

export default FooterMenu