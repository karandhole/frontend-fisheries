import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CalendarMonthOutlined from '@mui/icons-material/CalendarMonthOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from "../assets/logo.png"
import logo1 from "../assets/logo1.png"
import logo2 from "../assets/Swach-Bharat.png"
import logo3 from "../assets/logo5.png";
import { getFormatDate } from '../utility/dateformator';


const drawerWidth = 240;

function Navbar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { t, i18n } = useTranslation();

    const navItems = [
        { page: 'home', route: '/' },
        { page: 'about', route: '/about' },
        { page: 'schemes1', route: '/' },
        { page: 'rti', route: '/rti' },
        // { page: 'guidlines', route: '/' },
        { page: 'activities', route: '/' },
        { page: 'keyprojects', route: '/' },
        { page: 'gallery', route: '/' },
        { page: 'reports', route: '/' },
        { page: 'recuitment', route: '/' },
        { page: 'contact', route: '/contact' },
    ];

    const departmentItems = [
        { label: 'department1', route: '/maindivision' },
        { label: 'department2', route: '/nagpurdivision' },
        { label: 'department3', route: '/aurangabaddivision' },
    ];

    const Guidlines = [
        { label: 'pmmsyguidlines', route: '/pmmsyguidlines' },
        { label: 'fidfguidlines', route: '/fidfguidlines' },
        { label: 'generalguidlines', route: '/generalguidlines' },
    ];

    const NFDCProjects = [
        { label: 'project1', route: '/csr' },
        { label: 'project2', route: '/' },
        { label: 'project3', route: '/' },
        { label: 'project4', route: '/' },
    ];

    const [mobileDeptOpen, setMobileDeptOpen] = React.useState(false);
    const [mobileNFDCOpen, setMobileNFDCOpen] = React.useState(false);
    const [mobileGuidlinesOpen, setMobileGuidlinesOpen] = React.useState(false);

    const handleMobileDeptToggle = () => {
        setMobileDeptOpen(!mobileDeptOpen);
    };

    const [NFDCMenuAnchorEl, setNFDCMenuAnchorEl] = React.useState(null);
    const [GuidlinesMenuAnchorEl, setGuidlinesMenuAnchorEl] = React.useState(null);



    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const [deptAnchorEl, setDeptAnchorEl] = React.useState(null);
    const deptMenuOpen = Boolean(deptAnchorEl);

    const handleDeptMenuClick = (event) => {
        setDeptAnchorEl(event.currentTarget);
    };

    const handleDeptMenuClose = () => {
        setDeptAnchorEl(null);
    };


    const handleFontSize = (type) => {
        switch (type) {
            case "A+":
                document.documentElement.style.fontSize = "1.3rem";
                break;
            case "A-":
                document.documentElement.style.fontSize = "0.8rem";
                break;
            case "A":
                document.documentElement.style.fontSize = "1rem";
                break;
            default:
                break;
        }
    };


    const handleChangeLanguage = () => {
        const languageCode = i18n.language === "mr" ? "en" : "mr";
        i18n.changeLanguage(languageCode);
    };

    const drawer = (
        <Box sx={{ textAlign: 'center' }}>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <React.Fragment key={item.page}>
                        <ListItem disablePadding onClick={handleDrawerToggle}>
                            <ListItemButton component={Link} to={item.route} sx={{ textAlign: 'center' }}>
                                <ListItemText primary={t(item.page)} />
                            </ListItemButton>
                        </ListItem>

                        {/* Insert Departments after 'about' */}
                        {item.page === 'about' && (
                            <>
                                <ListItem button onClick={handleMobileDeptToggle} sx={{ textAlign: 'center' }}>
                                    <ListItemText primary={t("departments")} />
                                    {mobileDeptOpen ? <ExpandLess /> : <ExpandMore />}
                                </ListItem>

                                <Collapse in={mobileDeptOpen} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {departmentItems.map((dept) => (
                                            <ListItem key={dept.label} disablePadding onClick={handleDrawerToggle}>
                                                <ListItemButton
                                                    component={Link}
                                                    to={dept.route}
                                                    sx={{ textAlign: 'center' }}
                                                >
                                                    <ListItemText primary={t(dept.label)} />
                                                </ListItemButton>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Collapse>

                                {/* NFDC Projects Section */}
                                <ListItem button onClick={() => setMobileNFDCOpen(!mobileNFDCOpen)} sx={{ textAlign: 'center' }}>
                                    <ListItemText primary={t("nfdc_projects")} />
                                    {mobileNFDCOpen ? <ExpandLess /> : <ExpandMore />}
                                </ListItem>

                                <Collapse in={mobileNFDCOpen} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {NFDCProjects.map((project) => (
                                            <ListItem key={project.label} disablePadding onClick={handleDrawerToggle}>
                                                <ListItemButton
                                                    component={Link}
                                                    to={project.route}
                                                    sx={{ textAlign: 'center' }}
                                                >
                                                    <ListItemText primary={t(project.label)} />
                                                </ListItemButton>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Collapse>


                                 {/* Guidlines  Section */}
                                 <ListItem button onClick={() => setMobileGuidlinesOpen(!mobileGuidlinesOpen)} sx={{ textAlign: 'center' }}>
                                    <ListItemText primary={t("guidlines")} />
                                    {mobileGuidlinesOpen ? <ExpandLess /> : <ExpandMore />}
                                </ListItem>

                                <Collapse in={mobileGuidlinesOpen} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {Guidlines.map((guidlines) => (
                                            <ListItem key={guidlines.label} disablePadding onClick={handleDrawerToggle}>
                                                <ListItemButton
                                                    component={Link}
                                                    to={guidlines.route}
                                                    sx={{ textAlign: 'center' }}
                                                >
                                                    <ListItemText primary={t(guidlines.label)} />
                                                </ListItemButton>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Collapse>
                            </>

                        )}
                    </React.Fragment>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
                <Box
                    sx={{
                        backgroundColor: "#393185",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        px: { xs: 0, sm: 10 },
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Button sx={{ color: "white" }} size="small" onClick={handleChangeLanguage}>
                            {i18n.language === "en" ? "Marathi" : "English"}
                        </Button>
                        <Button sx={{ color: "white" }} onClick={() => handleFontSize("A+")} size="small">
                            A+
                        </Button>
                        <Button sx={{ color: "white" }} onClick={() => handleFontSize("A")} size="small">
                            A
                        </Button>
                        <Button sx={{ color: "white" }} onClick={() => handleFontSize("A-")} size="small">
                            A-
                        </Button>
                    </Box>

                    <Typography
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            gap: 1,
                            fontSize: 15,
                        }}
                        mr={1}
                    >
                        <CalendarMonthOutlined
                            sx={{ display: { xs: "none", md: "block" } }}
                        />{" "}
                        {getFormatDate(new Date())}
                    </Typography>


                </Box>

                {/*///////////////////////// second nav////////////////////////////////// */}


                <Toolbar sx={{ backgroundColor: "white", px: { xs: 2, sm: 0 } }}>
                    <IconButton color="inherit">
                        <MenuIcon />
                    </IconButton>

                    <Box
                        sx={{
                            flex: 1,
                            display: "flex",
                            flexDirection: { xs: "row", sm: "row" }, // Stack vertically on xs
                            alignItems: "center",
                            justifyContent: "flex-start",
                            gap: { xs: 1, sm: 6 }, // Smaller gap on mobile
                            py: 1,
                        }}
                    >
                        <Box
                            component="img"
                            src={logo}
                            alt="Logo 1"
                            sx={{ height: { xs: 50, sm: 80 }, maxWidth: "100%", objectFit: "contain" }}
                        />
                        <Box
                            component="img"
                            src={logo1}
                            alt="Logo 2"
                            sx={{ height: { xs: 50, sm: 80 }, maxWidth: "100%", objectFit: "contain" }}
                        />
                         <Box
                            component="img"
                            src={logo3}
                            alt="Logo 3"
                            sx={{ height: { xs: 50, sm: 80 }, paddingRight:{xs: 1, sm: 10}, maxWidth: "100%", objectFit: "contain" }}
                        />
                        <Box
                            component="img"
                            src={logo2}
                            alt="Logo 3"
                            sx={{ height: { xs: 50, sm: 80 }, maxWidth: "100%",  objectFit: "contain" }}
                        />
                       
                    </Box>
                </Toolbar>


                {/* ////////////////////////////////// third nav ////////////////////////////////// */}
                <Toolbar sx={{
                    backgroundColor: "#388de8",
                    minHeight: '0px !important',         // force override MUI default

                    paddingTop: '2px',
                    paddingBottom: '2px',
                }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { sm: 'none' }, padding: '0px' }}
                    >
                        <MenuIcon />
                    </IconButton>

                    {/* Desktop nav buttons */}
                    <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1, }}
                    >
                        {navItems.map((item) => (
                            <React.Fragment key={item.page}>
                                <Button
                                    component={Link}
                                    to={item.route}
                                    sx={{ color: 'white', fontWeight: '600' }}
                                >
                                    {t(item.page)}
                                </Button>

                                {/* Show the department dropdown right after 'about' */}
                                {item.page === "about" && (
                                    <>
                                        <Button
                                            sx={{ color: 'white', fontWeight: '600' }}
                                            onClick={handleDeptMenuClick}
                                            endIcon={<ArrowDropDownIcon />}
                                        >
                                            {t('departments')}
                                        </Button>
                                        <Menu
                                            anchorEl={deptAnchorEl}
                                            open={deptMenuOpen}
                                            onClose={handleDeptMenuClose}
                                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                                            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                                        >
                                            {departmentItems.map((dept) => (
                                                <MenuItem
                                                    key={dept.label}
                                                    component={Link}
                                                    to={dept.route}
                                                    onClick={handleDeptMenuClose}
                                                >
                                                    {t(dept.label)}
                                                </MenuItem>
                                            ))}
                                        </Menu>


                                        {/* NFDC Projects Button */}
                                        <Button
                                            sx={{ color: 'white', fontWeight: '600' }}
                                            onClick={(e) => setNFDCMenuAnchorEl(e.currentTarget)}
                                            endIcon={<ArrowDropDownIcon />}
                                        >
                                            {t('nfdc_projects')}
                                        </Button>
                                        <Menu
                                            anchorEl={NFDCMenuAnchorEl}
                                            open={Boolean(NFDCMenuAnchorEl)}
                                            onClose={() => setNFDCMenuAnchorEl(null)}
                                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                                            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                                        >
                                            {NFDCProjects.map((project) => (
                                                <MenuItem
                                                    key={project.label}
                                                    component={Link}
                                                    to={project.route}
                                                    onClick={() => setNFDCMenuAnchorEl(null)}
                                                >
                                                    {t(project.label)}
                                                </MenuItem>
                                            ))}
                                        </Menu>


                                         {/* Guidlines Button */}
                                         <Button
                                            sx={{ color: 'white', fontWeight: '600' }}
                                            onClick={(e) => setGuidlinesMenuAnchorEl(e.currentTarget)}
                                            endIcon={<ArrowDropDownIcon />}
                                        >
                                            {t('guidlines')}
                                        </Button>
                                        <Menu
                                            anchorEl={GuidlinesMenuAnchorEl}
                                            open={Boolean(GuidlinesMenuAnchorEl)}
                                            onClose={() => setGuidlinesMenuAnchorEl(null)}
                                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                                            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                                        >
                                            {Guidlines.map((guidlines) => (
                                                <MenuItem
                                                    key={guidlines.label}
                                                    component={Link}
                                                    to={guidlines.route}
                                                    onClick={() => setNFDCMenuAnchorEl(null)}
                                                >
                                                    {t(guidlines.label)}
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                    </>
                                )}
                            </React.Fragment>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
            </Box>
        </Box>
    );
}

Navbar.propTypes = {
    window: PropTypes.func,
};

export default Navbar;