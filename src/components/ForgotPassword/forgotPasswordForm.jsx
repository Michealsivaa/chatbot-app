import React from 'react'
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import ForgotPassStyle from './styles';
import { textAlign } from '@mui/system';

const page = [
    {
        pageLink: "/login"
    }
]

const ForgotPasswordForm = () => {

  const { forgotPasswordSec, emailLabel, fileInpShadow, textCenter, primary } = ForgotPassStyle();


    return (
        <div className={forgotPasswordSec}>
            <h4>Reset your password</h4>
            <p>Enter your email address or username, and we'll send you a link to get back into your account.</p>
            <form>
                <FormControl
                    fullWidth sx={{ pt: 2 }}>
                    <label className={emailLabel}
                       >
                        Email address or username
                    </label>
                    <OutlinedInput className={fileInpShadow}
                        placeholder='Email address'
                        />
                </FormControl>                
                <Button className={primary}
                    fullWidth
                    sx={{ mt: 3, background: "#f54806" }}
                    variant="contained">
                    Submit
                </Button>


                {/* <p className={textCenter}> Remembered?   
                     <span styles={{  }}> 
                        {page.map((item) => (
                            <Link to={item.pageLink}> Log in</Link>
                        ))}
                    </span>
                </p> */}

            </form>
           
           
        </div>
    )
}

export default ForgotPasswordForm