import { makeStyles } from "@mui/styles";

const SignupStyle = makeStyles({
    commonBgStyle: {
        padding: "60px 60px", 
        background:"#f3f4f6",
        marginTop: "0 !important", 
        marginBottom: 2
    },
    labelStyle: {
        fontSize: "12px",
        paddingBottom: "0px",
    },
    fileInpShadow: {
        boxShadow: "0px 1px 6px 1px #e2e1e1",
        height: "30px"
    },
    loginRef: {
        fontSize: "13px", marginTop: "10px", textAlign: "center",
        '& span': {
            color: "#f54806", fontWeight: "bold"
        }
    },
    policyRef: {
        marginTop: "40px", textAlign: "center", fontSize: "13px", lineHeight: "15px", fontWeight: "500",
        '& span': {
            textDecoration: "underline"
        }
    },
    heading: {
        textAlign: "center",
        paddingBottom: "10px",
        fontSize: "18px",
        fontWeight: "bold"
    },
    desc: {
        textAlign: "center",
        fontSize: "14px",
        fontWeight: "bold",
        lineHeight: "20px"
    },
    primary: {
        background: "#f54806",
        '&:hover':{
            background: "#f54806 !important"
        }
    },
    
})

export default SignupStyle