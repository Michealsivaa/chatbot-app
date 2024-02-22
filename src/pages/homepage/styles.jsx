import { makeStyles } from "@mui/styles";
import muiTheme from "../../themes/muiTheme";


const useStyles = makeStyles({
    hrAdviceTitle: {
        textAlign: 'center', fontSize: 22, lineHeight: '30px',
        [muiTheme.breakpoints.down(1024)]: {
            
          },
    },
    topicHeading: {
        textAlign: 'center',
        fontSize: '20px',
        fontWeight: 800,
        margin: '36px 0 20px 0'
    },
    topicAreaSection:{
        border: '1px solid #707782',
        padding: '12px',
        borderRadius: '6px',
        fontSize: 16,
        fontWeight: 600,
        color: 'black',
        cursor: 'pointer',
        [muiTheme.breakpoints.down(1024)]: {
          
          },
    },
    topicActive: {
        border: '1px solid #f7a38b',
        background: '#f9450b',
        padding: '12px',
        borderRadius: '6px',
        fontSize: 16,
        fontWeight: 600,
        color: 'white',
        cursor: 'pointer',
        [muiTheme.breakpoints.down(1024)]: {
           
          },
    },
    uploadSection: {
        display: 'flex',
        alignItems: 'center',
        padding: '24px 0'
    },
    selectSource: {
        display: 'flex',
        alignItems: 'center',
        marginRight: 36,
        '& .MuiSvgIcon-root': {
            fontSize: '30px',
            color: '#f9450b'
        },
        '& p': {
            fontSize: 16,
            lineHeight: 'normal',
            color: '#656567',
            marginRight: 8
        }
    },
    advancedPrompt: {
        display: 'flex',
        alignItems: 'center',
        '& .MuiSvgIcon-root': {
            fontSize: '30px',
            color: '#f9450b'
        },
        '& p': {
            fontSize: 16,
            marginRight: 8,
            color: '#656567',
        }
    }
});

export default useStyles;