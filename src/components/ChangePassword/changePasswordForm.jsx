import React from 'react'
import { Box, Grid } from '@mui/material'
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import ChangePasswordStyles from './styles';
import { Link } from 'react-router-dom';

const page = [
    {
        pageLink: "/login"
    }
]
const ChangePasswordForm = () => {
    const { labelStyle, fileInpShadow, heading, primary } = ChangePasswordStyles();
    return (
        <>
            <h4 className={heading}>Change Password</h4>
            <form>
                <FormControl
                    fullWidth sx={{ pt: 2 }}>
                    <label
                        className={labelStyle}>
                        Old Password
                    </label>
                    <OutlinedInput
                        placeholder='Email address'
                        className={fileInpShadow} />
                </FormControl>
                <FormControl
                    fullWidth sx={{ pt: 2 }}>
                    <label
                        className={labelStyle}>
                        New Password
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
                        Confirm New Password
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
                    Change Password
                </Button>
                

                <p style={{ fontSize: "13px", marginTop: "10px", textAlign: "center" }}>
                   Not now?   <span style={{ color: "#f54806", fontWeight: "bold" }}>
                        {page.map((item) => (
                            <Link to={item.pageLink}>Login here</Link>
                        ))}
                    </span>
                </p>

            </form>
        </>
    )
}

export default ChangePasswordForm