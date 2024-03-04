import React from 'react'
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Signupstyle from './styles';

const page = [
    {
        pageLink: "/login"
    }
]

const signUpForm = () => {
    const {labelStyle, fileInpShadow, loginRef, policyRef, heading, desc, primary} = Signupstyle();

    return (
        <div className="signupformstyle">
            <h4 className={heading}>Create your free account</h4>
            <p className={desc}>No Credit Card required.<br></br>Your free trial period will last for 90 days</p>
            <form>
                <FormControl
                    fullWidth sx={{ pt: 2 }}>
                    <label
                        className={labelStyle}>
                        Email address
                    </label>
                    <OutlinedInput
                        placeholder='Email address'
                        className={fileInpShadow} />
                </FormControl>
                <FormControl
                    fullWidth
                    sx={{ pt: 2 }}>
                    <label
                        className={labelStyle}>
                        Create a password
                    </label>
                    <OutlinedInput
                        placeholder='password'
                        className={fileInpShadow}
                    />
                </FormControl>
                <Button className={primary}
                    fullWidth
                    sx={{ mt: 3, background: "#f54806" }}
                    variant="contained">
                    Sign up
                </Button>

                <p className={loginRef}>
                    Already have an account?  <span styles={{  }}>
                        {page.map((item) => (
                            <Link to={item.pageLink}>Log in here</Link>
                        ))}
                    </span>
                </p>

            </form>
            <p className={policyRef}>
                By creating an account, you agree to our
                <br></br>
                <span>terms of service</span>
                and <span>privacy policy</span>
            </p>
            <p className={loginRef} style={{fontSize: "10px", lineHeight: "15px"}}>
                HR Advisor is designed for use by HR professionals and should not be construed as definitive legal advice or as a substitute for professional counsel</p>
        </div>
    )
}

export default signUpForm