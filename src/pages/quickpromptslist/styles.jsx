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
        padding: '36px 0 18px 0',
        
    },
    topicHeadingBottom: {
        textAlign: 'left',
        fontSize: '20px',
        fontWeight: 800,
        padding: '0px 0 30px 0',
    },
    chatDetailsList: {
        marginBottom: 36,
        "& > p" : {
            fontSize: 16,
            lineHeight: '24px',
            color: '#494949'
        }
    },
    topicAreaSection:{
        padding: '6px 0',
        borderRadius: '6px',
        fontSize: 16,
        fontWeight: 600,
        color: 'black',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'flex-start',
        position: 'relative',
        '& .MuiFormControlLabel-root': {
            display: 'flex',
            alignItems: 'flex-start',
        },
        '& .MuiFormControlLabel-label': {
            padding: '8px',
            fontSize: '14px',
            lineHeight: '21px',
            color: 'black',
            fontFamily: `'Arimo', sans-serif`

        },
        "& .MuiButtonBase-root.Mui-checked": {
            color: '#f9450b'
        },
        "& .MuiFormGroup-root": {
            maxHeight: '140px',
            overflow: 'auto',
            display: 'block',
            marginRight: "20px",
            '&::after': {
                content: '""',
                width: 1,
                height:"100%",
                background: 'rgb(209 213 219 / 100%)',
                position: 'absolute',
                top: 0,
                right: 20
            },
        },
        [muiTheme.breakpoints.between(900, 1248)]: {
            fontSize: 13,
        },
        [muiTheme.breakpoints.down(768)]: {
        fontSize: 16,
        },

    },
    topicActive: {
        padding: '6px 0',
        borderRadius: '6px',
        fontSize: 16,
        fontWeight: 600,
        color: 'black',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'flex-start',
        '& .MuiFormControlLabel-root': {
            display: 'flex',
            alignItems: 'flex-start',
        },
        '& .MuiFormControlLabel-label': {
            padding: '8px',
            fontSize: '14px',
            lineHeight: '21px',
            color: 'black',
            fontFamily: `'Arimo', sans-serif`
        },
        [muiTheme.breakpoints.down(1280)]: {
            fontSize: 14,
        },
        [muiTheme.breakpoints.down(768)]: {
        fontSize: 16,
        },
    },
    faqHeading: {
        color: '#f9450b',
        marginBottom: '18px'
    },
    topicAreaInnerList: {
        padding: '12px 0',
        borderTop: '1px solid #d7d7d7',
        borderBottom: '1px solid #d7d7d7',

    },
    paginationSection: {
        textAlign: 'center',
        color: '#f9450b',
        margin: "12px",
        '& .MuiSvgIcon-root': {
            color: '#f9450b',
            fontSize: '16px'
        },
    },
    next: {
        transform: 'rotate(180deg)'
    },
    uploadSection: {
        display: 'flex',
        alignItems: 'center',
        padding: '11px 0',
    },
    selectSource: {
        display: 'flex',
        alignItems: 'center',
        marginRight: 36,
        marginLeft: 16,
        '& .MuiSvgIcon-root': {
            fontSize: '30px',
            color: '#f9450b'
        },
        '& p': {
            fontSize: 16,
            lineHeight: 'normal',
            color: '#656567',
            marginRight: 8,
            fontWeight: 500,
            [muiTheme.breakpoints.down(600)]: {
                fontSize: 14,
            },
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
            fontWeight: 500,
            [muiTheme.breakpoints.down(600)]: {
                fontSize: 14,
            },
        }
    },
    chatboxSection: {
        '& .MuiSvgIcon-root' : {
            display: 'none',

        },
        '& .MuiOutlinedInput-root': {
            background: '#fff !important',
            borderRadius: '18px',
            '& :hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'none !important'
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'transparent !important',
                borderWidth: 0,
            },
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'transparent !important'
            }
        },
        '& :nth-child(1)': {
            marginRight: '8px !important'
        },
        '& .MuiIconButton-root': {
            padding: '0 !important',
            '& img': {
                width:' 30px !important',
                marginRight: '0 !important'
            }
        },
        '& :nth-child(3)': {
            marginRight: '0 !important'
        },
        
    },
    chatboxRow: {
        position: 'absolute',
        bottom: '118px',
        left: '50%',
        width: '75%',
        padding: '24px 24px 24px 24px',
        transform:'translate(-50%, -50%)',
        [muiTheme.breakpoints.down(900)]: {
            borderTop: '8px solid #d7d7d7',
            position: 'fixed',
            bottom: '-82px',
            width: '100%',
            background: '#f3f4f6',
            padding: '24px 24px 24px 24px',
        },
    },
    homePageTop: {
        height: 'calc(100vh - 255px)',
        overflow: 'auto',
        padding: '36px 48px',
        [muiTheme.breakpoints.down(1024)]: {
            height: 'inherit',
            overflow: 'inherit',

        },
    },
    topicAreaButton: {
        textAlign: 'center',
        '& .MuiButtonBase-root': {
            background: '#f9450b',
            fontSize: '24px',
            padding: '8px 24px',
            textTransform: 'capitalize',
            borderRadius: '14px',
            '&:hover': {
            background: '#f9450b',

            }
        },

    },
    promptSection: {
        width: '78%',
        margin: '0 auto'
    },
    promptSectionBotton: {
        width: '78%',
        margin: '0 auto',
        maxHeight: '183px',
        overflow: 'auto',
        padding: '36px 48px',
        '&::after': {
            content: '""',
            width: 1,
            height:"85%",
            background: 'rgb(209 213 219 / 100%)',
            position: 'absolute',
            top:66,
            right: 77
        },
    }
});

export default useStyles;