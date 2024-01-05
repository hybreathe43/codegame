import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CardMedia, Container, Grid } from "@mui/material";
import logo from "../../../public/image/logo.png";
import flag from "../../../public/image/kazakhstan.png";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Footer from "./HomePageFooter";

const drawerWidth = 240;
const navItems = [
    "Steam",
    "Pubg",
    "Cooperation",
    "FAQ",
    "Contacts",
    "About company",
];

const input = {
    flex: 1,
    padding: "9px",
    fontSize: "18px",
    background: "#2F3654",
    borderRadius: "10px",
    width: "100%",
    border: "none",
    outline: "none",
};

function DrawerAppBar({ window, children }) {
    console.log(children)
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <ListItemText />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{}}>
            <CssBaseline />
            <AppBar component="nav" sx={{ background: "#1C2138 !important" }}>
                <Container maxWidth="xl" sx={{ px: "100px !important" }}>
                    <Grid item xs={12} sx={{ textAlign: "end", pt: 0.4 ,pb:1}}>
                        {navItems.map((item) => (
                            <Button
                                key={item}
                                sx={{ color: "#848CA1", textTransform: "none" }}
                            >
                                {item}
                            </Button>
                        ))}
                    </Grid>
                    <Grid container sx={{ pb: 1.5 }}>
                        <Grid item xs={2.5}>
                            <img src={logo} alt="not" />
                        </Grid>
                        <Grid
                            item
                            xs={1.5}
                            sx={{ display: "flex", justifyContent: "end" }}
                        >
                            <Button
                                sx={{
                                    color: "#fff",
                                    border: "2px solid #00EE34",
                                    borderRadius: 3,
                                    py: "0px",
                                }}
                            >
                                <MenuIcon
                                    sx={{ fontSize: 37, pr: 0.7 }}
                                    onClick={handleDrawerToggle}
                                />

                                <Typography variant="overline" sx={{ pt: 0.1 }}>
                                    KATALOG
                                </Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={5} sx={{ pl: 3 }}>
                            <Grid sx={{ display: { md: "none", lg: "flex" } }}>
                                <input
                                    type="text"
                                    placeholder="Search service or game"
                                    style={input}
                                />
                                <Button
                                    type="submit"
                                    style={{
                                        backgroundColor:
                                            "rgba(255, 255, 255, 0.14)",
                                        color: "#fff",
                                    }}
                                    sx={{
                                        cursor: "pointer",
                                        borderRadius: "12px",
                                        minWidth: "49px",
                                        ml: -6,
                                    }}
                                >
                                    <SearchIcon style={{}} />
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            xs={2}
                            sx={{ display: "flex", justifyContent: "end" }}
                        >
                            <Button
                                style={{
                                    color: "#fff",
                                    background: "#2F3654",
                                    // border: "2px solid #00EE34",
                                    borderRadius: "12px",
                                    padding: "5px 10px",
                                }}
                            >
                                <img src={flag} alt="not" />

                                <Typography
                                    variant="overline"
                                    sx={{ pt: 0.1, px: 1 }}
                                >
                                    Kazakhstan
                                </Typography>
                                <ExpandMoreIcon onClick={handleDrawerToggle} />
                            </Button>
                        </Grid>
                        <Grid
                            item
                            xs={1}
                            sx={{ display: "flex", justifyContent: "end" }}
                        >
                            <Button
                                style={{
                                    color: "#fff",
                                    background: "#2F3654",
                                    // border: "2px solid #00EE34",
                                    borderRadius: "12px",
                                    padding: "5px 10px",
                                }}
                            >
                                <Typography
                                    variant="overline"
                                    sx={{ pt: 0.1, px: 1 }}
                                >
                                    KZT
                                </Typography>
                                <ExpandMoreIcon onClick={handleDrawerToggle} />
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>

            {children}

            <Grid sx={{ background: "rgba(131, 151, 195, 0.1)" }}>
                <Footer />
            </Grid>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    children: PropTypes.node,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;
