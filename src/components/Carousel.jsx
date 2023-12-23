/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Parallax } from "react-parallax";
import  img1  from "../assets/img/489350.jpg"
import  img2  from "../assets/img/490013.jpg"


import imagesC from "../assets/carousel/elementsCarousel.json"

export const Carousel = () => {

    const imagesCrsel = imagesC.data
    console.log('carusel ', imagesCrsel[0])

    const options = {
        items: 1,
        loop: true,
        autoplay: true,
        autoplaytimeout: 2000,
        nav: false,
        dots: true,
        stagePadding: 30,
        smartSpeed: 450,
        margin: 0,
        responsive: {
            1100: {
                items: 1,
            },
        }
    }

    const insideStyle = {
        // background: "fff",
        // padding: "20px",
        // position: "absolute",
        // top: "50%",
        // left: "50%",
        // transform: "traslate(-50%,-50%)"
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height:"100vh"
    }

    return (
        <>
            <Parallax bgImage={img1} strength={400} className='parallaxContainer'>
                <div style={insideStyle}>
                    <div >
                    <div className='container-fluid owl-theme' >
                    <OwlCarousel {...options} >
                        <div className='item'>
                            <h1>We have Awesome things</h1>
                            <p>Lets make the web beautiful together</p>
                            {/* <img className="img" src={imagesCrsel[0].img} /> */}
                        </div>
                        <div className='item'>
                            <h1>We have Awesome things</h1>
                            <p>Lets make the web beautiful together</p>
                            {/* <img className="img" src={imagesCrsel[1].img} /> */}
                        </div>
                        <div className='item'>
                            <h1>We have Awesome things</h1>
                            <p>Lets make the web beautiful together</p>
                            {/* <img className="img" src={imagesCrsel[2].img} /> */}
                        </div>
                    </OwlCarousel>
                </div>
                    </div>
                </div>
            </Parallax>
        </>
    )
}
