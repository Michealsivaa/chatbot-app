import { makeStyles } from "@mui/styles";

const FooterStyles = makeStyles({
    menuStyle: {
        listStyle: "none",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    addvStyle: {
        fontWeight: "bold",
    },
    footerBg: {
        padding: "16px !important",
        background: "#2e394b !important",
        color: "#fff !important"
    },
    footLogo: {
        minWidth: 100,
        fontSize: "50px !important"
    },
    connetUs: {
        textAlign: "center",
        '& > h4': {
            paddingBottom: "3px"
        },
        '& > hr': {
            marginBottom: "20px"
        }
    },
    footerTextSummary: {
        fontSize: "12px !important"
    },
    copyRightText: {
        fontSize: "12px !important",
        padding: "20px 0px"
    }
})

export default FooterStyles;