import React from 'react'
import Facebook from '../Images/facebook.jpg'
import Linkedin from '../Images/linkedin.jpg'
import Twitter from '../Images/twitter.jpg'
import { Box } from '@mui/material'
import FooterStyles from './styles';

const SocialLogo = () => {
  const { socialImg } = FooterStyles();

  return (
    <Box display="flex" justifyContent="space-around">
        <img src={Facebook} className={socialImg} />
        <img src={Linkedin} className={socialImg}/>
        <img src={Twitter}  className={socialImg}/>
    </Box>
  )
}

export default SocialLogo