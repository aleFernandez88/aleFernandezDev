// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Divider from '@mui/material/Divider';
// import InboxIcon from '@mui/icons-material/Inbox';
// import DraftsIcon from '@mui/icons-material/Drafts';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export const NavListDrawer = () => {

    const navbarLinks = [
        {
            title: 'Home',
            path: "ale-fernandez/"
        },
        {
            title: 'sobtre mi',
            path: "ale-fernandez/SobreMi"
        },
        {
            title: 'proyectos',
            path: "ale-fernandez/Proyectos"
        },
        {
            title: 'contacto',
            path: "ale-fernandez/Contacto"
        }];

    return (
        <>
            {/* <Box sx={{ width: '250px', maxWidth: 360, bgcolor: 'background.paper' }}>
                <nav aria-label="main mailbox folders">
                    <List>
                        {navbarLinks.map((page) => (
                            <>
                            <MenuItem key={page.title}>
                                <Typography textAlign="center">
                                    <Link to={`${page.path}`} classNameName='appBar-link'>
                                        {page.title}
                                    </Link>
                                </Typography>
                            </MenuItem>
                            </>
                        ))}
                    </List>
                </nav>
            </Box> */}
        </>
    )
}
