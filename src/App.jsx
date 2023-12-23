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
                <ResponsiveAppBar navbarLinks={navbarLinks} />
                <Box sx={{
                }}>
                    <Routes>
                        <Route path='ale-fernandez/' element={<Home />} />
                        <Route path='ale-fernandez/Proyectos' element={<Proyectos />} />
                        <Route path='ale-fernandez/SobreMi' element={<SobreMi />} />
                        <Route path='ale-fernandez/Contacto' element={<Contacto />} />
                    </Routes>
                </Box>

        </>
    )
}
