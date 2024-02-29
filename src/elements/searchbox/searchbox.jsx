import {React, useEffect, useState} from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import IconButton from "@mui/material/IconButton";
import uploadIcon from '../../images/upload-icon.svg';
import uploadIconDisabled from '../../images/upload-icon-disabled.svg';
import { useContext } from 'react';
import { MyContextApi } from '../../App';


const SearchBox = (props) => {
    const {selectRadio, setSelectedRadio} = useContext(MyContextApi);
    

    const {searchInput} = props;

    const [searchText, setSearchText] = useState(selectRadio);
    const [disable, setDisable] = useState(false);

    useEffect(() => {
        setSearchText(selectRadio);
    },[selectRadio])

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
    }
    const onHandleClick = () => {
        setDisable(true);
    }
    return (
        <>
            <div className={searchInput}>
                <OutlinedInput
                    fullWidth
                    value={searchText}
                    onChange={handleInputChange}
                    placeholder="Enter a prompt here"
                    id="outlined-adornment-amount"
                    startAdornment={<AttachFileIcon position="start" />}
                    endAdornment={
                        <IconButton disabled={disable} onClick={onHandleClick} type="button" aria-label="search">
                            {searchText ? <img src={uploadIcon} /> : <img src={uploadIconDisabled} />}
                        </IconButton>
                    }
                />
            </div>
        </>
    )
}

export default SearchBox