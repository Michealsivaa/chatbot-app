import { makeStyles } from "@mui/styles";

const LoginStyle = makeStyles({
    labelStyle: {
        fontSize: "12px",
        paddingBottom: "0px",
    },
    fileInpShadow: {
        boxShadow: "0px 1px 6px 1px #e2e1e1",
        height: "30px"
    },
    heading: {
        textAlign: "center",
        paddingBottom: "10px",
        fontSize: "18px",
        fontWeight: "bold"
    },
    primary: {
        background: "#f54806",
        '&:hover':{
            background: "#f54806 !important"
        }
    },
    forgetPasswordText: {
        textAlign: "center",
        padding: "20px 0px",
        textDecoration: "underline",
        cursor: "pointer"
    },
    commonBgStyle:{
        padding: "60px 60px", 
        background:"#f3f4f6", 
        marginTop: "0 !important", 
        marginBottom: 2
    }
    
})

export default LoginStyle