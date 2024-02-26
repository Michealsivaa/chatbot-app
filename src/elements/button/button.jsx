import {React, useState} from 'react';


const Button = (props) => {
    const {name} = props;
    
    return (
        <>
            <Button variant="contained">{name}</Button>
        </>
    )
}

export default Button