import { AppBar, Box, Container, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import logoHeader from '../assets/img/Logo-full-2.png'
import { Link } from 'react-router-dom';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import WorkTwoToneIcon from '@mui/icons-material/WorkTwoTone';
import ContactPageTwoToneIcon from '@mui/icons-material/ContactPageTwoTone';

function ResponsiveAppBar() {

    const [open, setOpen] = useState(false)

    const openClick = () => {
        setOpen(true)
    }


    const navbarLinks = [
        {
            title: 'home',
            path: "ale-fernandez/",
            icon: <HomeTwoToneIcon />
        },
        {
            title: 'sobre mi',
            path: "ale-fernandez/SobreMi",
            icon: <InfoTwoToneIcon />
        },
        {
            title: 'proyectos',
            path: "ale-fernandez/Proyectos",
            icon: <WorkTwoToneIcon />
        },
        {
            title: 'contacto',
            path: "ale-fernandez/Contacto",
            icon: <ContactPageTwoToneIcon />
        }];

    return (

        <>
        <Container>
            <AppBar position="relative" className="pruebaaaa">
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <IconButton
                        color="inherit"
                        size="large"
                        onClick={openClick}
                        sx={{ display: { sx: "block", sm: "none" } }}
                    >
                        <MenuRoundedIcon className="menuHam" />
                    </IconButton>
                    <Box sx={{ display: { xs: "none", sm: "flex" }, justifyContent: "space-between", columnGap: "15px" }}>
                        {navbarLinks.map((page) => (
                            <>
                                <Typography textAlign="center">
                                    <Link to={`${page.path}`} key={page.title} className='hvr-overline-from-center'>
                                        {page.title}
                                    </Link>
                                </Typography>
                            </>
                        ))}
                    </Box>
                    <Box sx={{width:{xs:"50%",sm:"25%"}}}>
                    <img  className="logoHeader" src={logoHeader} />
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                open={open}
                anchor="left"
                onClose={() => setOpen(false)}
                className="drawer"
            >
                <Box sx={{ width: "250px" }} className="drawerBox">
                <img className="logoHeader-res" src={logoHeader} />
                    {navbarLinks.map((page) => (
                        <>
                            <Typography textAlign="left" ml={"20px"} mt={"20px"} display={"flex"} alignItems={"flex-end"} justifyContent={"start"} columnGap={"10px"}>
                                <Typography color={"#009688"} >
                                    {page.icon}
                                </Typography>
                                <Link to={`${page.path}`} key={page.title} className='appBar-link'>
                                    {page.title}
                                </Link>
                            </Typography>
                        </>
                    ))}
                </Box>
            </Drawer>
            </Container>
        </>
    );
}
export default ResponsiveAppBar;