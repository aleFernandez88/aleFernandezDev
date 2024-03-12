/* eslint-disable react/prop-types */
import { Box } from '@mui/material'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import pngegg from "../assets/img/skills/pngegg.png"
import pngegg0 from "../assets/img/skills/pngegg(1).png"
import pngegg1 from "../assets/img/skills/pngegg(2).png"
import pngegg2 from "../assets/img/skills/pngegg(3).png"
import pngegg3 from "../assets/img/skills/pngegg(4).png"
import pngegg4 from "../assets/img/skills/pngegg(5).png"
import pngegg5 from "../assets/img/skills/pngegg(6).png"
import pngegg6 from "../assets/img/skills/pngegg(7).png"
import pngegg7 from "../assets/img/skills/pngegg(8).png"


export default function BannerTec() {

    const options = {
        dots: false,
        loop: true,
        margin: 30,
        stagePadding: 0,
        smartSpeed: 2500,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 2,
            },
            768: {
                items: 4,
            },
            992: {
                items: 6
            }
        }
    }

    return (
        <Box sx={{
        }}>
            <Box className="slider_wrapper">
                <Box className="container">
                    <OwlCarousel {...options} className='owl-tec owl-carousel slider_active'>
                        <img className='img-fluid   ' src={pngegg} />
                        <img className='img-fluid   ' src={pngegg0} />
                        <img className='img-fluid   ' src={pngegg1} />
                        <img className='img-fluid   ' src={pngegg2} />
                        <img className='img-fluid   ' src={pngegg3} />
                        <img className='img-fluid   ' src={pngegg4} />
                        <img className='img-fluid   ' src={pngegg5} />
                        <img className='img-fluid   ' src={pngegg6} />
                        <img className='img-fluid   ' src={pngegg7} />
                    </OwlCarousel>
                </Box>
            </Box>
        </Box>
    )
}
