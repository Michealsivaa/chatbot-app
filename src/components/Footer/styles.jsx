import { makeStyles } from "@mui/styles";

const FooterStyles = makeStyles({
    menuStyle: {
        listStyle: "none",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    addvStyle: {
        fontWeight: "900",
        fontFamily: "'Almarai', sans-serif",
    },
    footerBg: {
        padding: "12px 32px !important",
        background: "#2e394b !important",
        color: "rgb(255 255 255 / 80%) !important"
    },
    footLogo: {
        minWidth: 100,
        fontSize: "52px !important",
        fontFamily: "'Almarai', sans-serif !important",
    },
    connetUs: {
        textAlign: "center",
        '& > h4': {
            paddingBottom: "3px",
            color: "fff !important"
        },
        '& > hr': {
            marginBottom: "20px"
        }
    },
    footerTextSummary: {
        fontSize: "12px !important",
        color: "#fff"
    },
    copyRightText: {
        fontSize: "15px !important",
        padding: "20px 0px",
        color: "#fff"
    },
    socialImg: {
        borderRadius: "50%",
        width: "30px",
        height: "30px"
    },

})

export default FooterStyles;