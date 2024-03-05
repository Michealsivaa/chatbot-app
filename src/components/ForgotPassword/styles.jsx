import { makeStyles } from "@mui/styles";

const ForgotPassStyle = makeStyles({
    commonBgStyle: {
        padding: "60px 60px", 
        background:"#f3f4f6", 
        marginTop: "0 !important", 
        marginBottom: 2
    },
    forgotPasswordSec:{
        fontSize: "14px",      
        '& > h4': {
            textAlign: "center",
            fontSize: "16px"
        },
        '& > p': {
            lineHeight: "25px"
        }      
    },
    emailLabel: {
        fontWeight: "bold"
    },
    fileInpShadow: {
        boxShadow: "0px 1px 6px 1px #e2e1e1",
        height: "30px"
    },
    textCenter: {
        textAlign: "center"
    },
    primary: {
        background: "#f54806",
        '&:hover':{
            background: "#f54806 !important"
        }
    }
})

export default ForgotPassStyle