import { useState, useEffect } from "react";
import { Box, Drawer } from "@mui/material";
import { Divider, List, ListItem, ListItemButton, ListItemText, MenuItem, MenuList } from '@mui/material';
// import menuLogoImg from "../../images/viot-white-logo.svg";
import AttributionIcon from '@mui/icons-material/Attribution';
import SearchIcon from '@mui/icons-material/Search';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Avatar from '@mui/material/Avatar';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { deepOrange, deepPurple } from '@mui/material/colors';
import useStyles from "./styles";


const SideBar = () => {

    const [activePage, setActivePage] = useState();

    const {
        sideNavigation,
        menuLogoSection,
        footerSection,
        menuLogo,
        listSection,
        documentSection,
        innerMenuSection,
        fileUploadSection,
        previousText,
        listItemTitle,
        upgradeSection,
        avatharSection,
        flex1
    } = useStyles();

    useEffect(() => {
        setActivePage(0);
    }, []);

    const handleClick = (event, id, path, title) => {
        setActivePage(id);
    };

    const menuIcon = [
        {
            icon: <AttributionIcon />,
            content: "Legal Advice",
            id: "legal",
        },
        {
            icon: <SearchIcon />,
            content: "General Research",
            id: "research",
        },
        {
            icon: <FolderCopyIcon />,
            content: "File Analysis",
            id: "file",
        },
        {
            icon: <SaveAsIcon />,
            content: "Document/Letter Drafting",
            id: "document",
        },
    ];

    return (
        <Box component={"nav"} sx={{ flexShrink: 0, }}>
            <Drawer
                open
                variant="permanent"
                PaperProps={{ sx: { bgcolor: "#2e394b" } }}
                className={sideNavigation}
            >
                <div className={flex1}>
                    <div className={menuLogoSection}>
                        {/* <img src={menuLogoImg} /> */}
                        <h1 className={menuLogo}>HR<span>ADVISOR</span></h1>
                    </div>
                    <div className={listSection}>
                        <p className={previousText}>Previous 7 Days</p>
                        <List>
                            <ListItem className={listItemTitle} sx={{ mb: 0, pb: 0, pt: 0 }}><ListItemText>Addressing Workplace Discrimination</ListItemText></ListItem>
                            <ListItem className={listItemTitle} sx={{ mb: 0, pb: 0, pt: 0 }}><ListItemText>Employment Contract Restrictive Cov </ListItemText></ListItem>
                            <ListItem className={listItemTitle} sx={{ mb: 0, pb: 0, pt: 0 }}><ListItemText>UK Employee Adjustments             </ListItemText></ListItem>
                            <ListItem className={listItemTitle} sx={{ mb: 0, pb: 0, pt: 0 }}><ListItemText>Dealing with Underpferming Staff    </ListItemText></ListItem>
                            <ListItem className={listItemTitle} sx={{ mb: 0, pb: 0, pt: 0 }}><ListItemText>Handling Sensitive Workplace Dispute</ListItemText></ListItem>
                            <ListItem className={listItemTitle} sx={{ mb: 0, pb: 0, pt: 0 }}><ListItemText>UK Maternity, Paternity, Leave      </ListItemText></ListItem>
                            <ListItem className={listItemTitle} sx={{ mb: 0, pb: 0, pt: 0 }}><ListItemText>Trade secrets clause                </ListItemText></ListItem>
                            <ListItem className={listItemTitle} sx={{ mb: 0, pb: 2, pt: 0 }}><ListItemText>Handling Workplace Conflict         </ListItemText></ListItem>
                        </List>


                    </div>
                    <div className={documentSection} >
                        {menuIcon &&
                            menuIcon?.length > 0 &&
                            menuIcon?.map((item, index) => {
                                return (
                                    <div className={innerMenuSection} key={index}>
                                        {item?.icon}
                                        <div>{item?.content}</div>
                                    </div>
                                );
                            })}
                    </div>
                    <div className={fileUploadSection}>
                        <UploadFileIcon />
                        <div><input type="file" /></div>
                    </div>
                </div>
                <div>
                    <div className={footerSection}>
                        <AutoAwesomeIcon />
                        <div className={upgradeSection}>
                            <div>Upgrade plan</div>
                            <p>12 days left - Free Trial</p>
                        </div>
                    </div>
                    <div className={avatharSection}>
                        <Avatar sx={{ bgcolor: deepOrange[500] }} alt="Jason Schofield">J</Avatar>
                        <div>Jason Schofield</div>
                    </div>
                </div>
            </Drawer>
        </Box>
    );
};

export default SideBar;
