import {React, useState} from 'react';
import { Button } from '@mui/material';


const CustomButton = (props) => {
    const {name, customButtonClass} = props;
    
    return (
        <>
            <div className={customButtonClass}>
                <Button variant="contained">{name}</Button>
            </div>
        </>
    )
}

export default CustomButton;