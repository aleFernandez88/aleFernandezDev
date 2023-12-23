/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import BannerCV from '../components/BannerCV'
import BannerTec from '../components/BannerTec'
import { ProjectsSec } from '../components/ProjectsSec'
import { TitleInformation } from '../components/TitleInformation'
import { Box } from '@mui/material'


export const Proyectos = () => {

    return (
        <Box className="proyectos">
            <TitleInformation title={"proyectos"} subtitle={"mira un poco de lo que puedo hacer"} />
            <BannerTec />
            <Box className="bannerCV" margin={"60px 0 40px"}>
                <BannerCV className="bannerCV-parallax" bg="Bg-IN section-banner" title="Visita mi linkedin" subtitle="No te olvides de seguirme para que podamos estar conectados.   " />
            </Box>
            <TitleInformation title={"galeria proyectos"} subtitle={"mira un poco de lo que puedo hacer"} />
            <ProjectsSec />
        </Box>
    )
}
