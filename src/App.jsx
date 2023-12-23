import ResponsiveAppBar from "./components/ResponsiveAppBar";

import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { Home } from './pages/Home';
import { Proyectos } from './pages/Proyectos';
import { SobreMi } from './pages/SobreMi';
import { Contacto } from './pages/Contacto';

export const App = () => {
    // navbar links
    const navbarLinks = [
        {
            title: 'Home',
            path: ""
        },
        {
            title: 'sobtre mi',
            path: "SobreMi"
        },
        {
            title: 'proyectos',
            path: "Proyectos"
        },
        {
            title: 'contacto',
            path: "Contacto"
        }];

    return (
        <>
                <ResponsiveAppBar navbarLinks={navbarLinks} />
                <Box sx={{
                }}>
                    <Routes>
                        <Route path='' element={<Home />} />
                        <Route path='Proyectos' element={<Proyectos />} />
                        <Route path='SobreMi' element={<SobreMi />} />
                        <Route path='Contacto' element={<Contacto />} />
                    </Routes>
                </Box>

        </>
    )
}
