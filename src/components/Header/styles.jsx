import { makeStyles } from "@mui/styles";
import muiTheme from "../../themes/muiTheme";

const HeaderStyles = makeStyles({
    menuStyle: {
        listStyle: "none",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        '& > li': {
            marginRight: "30%"
        }
        // justifyContent: "space-evenly",
        // width: "100%"
    },

    addvStyle: {
        fontWeight: "900",
        fontFamily: "'Almarai', sans-serif",
    },
    headerMain: {
        padding: "12px 32px", 
        background: "#2e394b", 
        color: "#fff"
    },
    headLogo: {
        minWidth: 100, 
        fontSize: "52px !important",
        fontFamily: "'Almarai', sans-serif",
        marginRight: "10% !important"
    },
    headerButton: {
        textTransform: "none !important", 
        background: "#f54806 !important", 
        borderRadius: "14px !important", 
        fontSize: "25px !important"
    }
})

export default HeaderStyles;