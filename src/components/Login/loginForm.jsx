import React from 'react'
import { Box } from '@mui/material'
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import LoginStyle from './style'
import { Link } from 'react-router-dom';


const page = [
    {
        pageLink: "/signup"
    }
]
const LoginForm = () => {
    const {labelStyle, fileInpShadow, heading, primary} = LoginStyle();
    return (
        <>
            <h4 className={heading}>Login</h4>
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
                        Password
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
                    Log In
                </Button>

                <p style={{ fontSize: "13px", marginTop: "10px", textAlign: "center" }}>
                    Don't have an account?  <span style={{ color: "#f54806", fontWeight: "bold" }}>
                        {page.map((item) => (
                            <Link to={item.pageLink}>Sign Up for HRAdvisor</Link>
                        ))}
                    </span>
                </p>

            </form>
        </>
    )
}

export default LoginForm