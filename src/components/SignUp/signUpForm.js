import React from 'react'
import { Box } from '@mui/material'
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import './my-style.signup.css';
// import ButtonStyled from '../Buttons/buttonStyled';
import { Link } from 'react-router-dom';

const page = [
    {
        pageLink: "/signin"
    }
]

function SignUpForm() {
    const labelStyle = {
        fontSize: "12px", paddingBottom: "0px"
    }
    const fileInpShadow = {
        boxShadow: "0px 1px 6px 1px #e2e1e1", height: "30px"
    }

    return (
        <div className="signupformStyle">
            {page.map((item)=>(
                <Link to={item.pageLink}>Signin</Link>
            ))}
            <h4>Create your free account</h4>
            <p>No Credit Card required.<br></br>Your free trail period will last for 90 days</p>
            <form style={{}}>
                <FormControl
                    fullWidth sx={{ pt: 2 }}>
                    <label
                        style={labelStyle}>
                        Email address
                    </label>
                    <OutlinedInput
                        placeholder='Email address'
                        style={fileInpShadow} />
                </FormControl>
                <FormControl
                    fullWidth
                    sx={{ pt: 2 }}>
                    <label
                        style={labelStyle}>
                        Create a password
                    </label>
                    <OutlinedInput
                        placeholder='password'
                        sx={fileInpShadow}
                    />
                </FormControl>
                <Button className='primary'
                    fullWidth
                    sx={{ mt: 3, background: "#f54806" }}
                    variant="contained">
                    Sign up
                </Button>
                
                <p style={{ fontSize: "13px", marginTop: "10px", textAlign: "center" }}>
                    Already have an account?  <span style={{ color: "#f54806", fontWeight: "bold" }}>
                         Sign in
                    </span>
                </p>
                
            </form>
            <p style={{ marginTop: "40px", textAlign: "center", fontSize: "13px", lineHeight: "15px", fontWeight: "500" }}>
                By creating an account, you agree to our
                <br></br>
                <span style={{ textDecoration: "underline" }}>terms of service</span>
                and <span style={{ textDecoration: "underline" }}>privacy policy</span>
            </p>
            <p style={{ textAlign: "center", marginTop: "20px", fontSize: "10px", lineHeight: "15px", fontWeight: "500" }}>
                HR Advisor is designed for use by HR professionals and should not be construed as definitive legal advice or as a substitute for professional counsel</p>
        </div>
    )
}

export default SignUpForm