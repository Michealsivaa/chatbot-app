import React from 'react'
import Facebook from '../Images/facebook.jpg'
import Linkedin from '../Images/linkedin.jpg'
import Twitter from '../Images/twitter.jpg'
import { Box } from '@mui/material'

const SocialLogo = () => {
  return (
    <Box display="flex" justifyContent="space-around">
        <img src={Facebook} style={{borderRadius: "50%"}} />
        <img src={Linkedin} style={{borderRadius: "50%"}}/>
        <img src={Twitter} style={{borderRadius: "50%"}}/>
    </Box>
  )
}

export default SocialLogo