/* eslint-disable react/prop-types */
import { Typography, Box, Button, Stack } from '@mui/material'
import { Parallax } from "react-parallax"
import img1 from "../assets/img/bg-body-33.png"

export default function BannerCV(props) {

  return (
    <Parallax className="bannerCV-parallax" blur={.5} bgImage={img1} bgImageAlt="the cat" strength={400}>
      <Box className={`${props.bg}`} sx={{
        width: '100%',
        maxWidth: "1500",
        padding: "50px ",
        margin: "10px 0 auto",
        position: "relative"
      }}
      sm={{
        padding:"150px",
      }}>
        <Typography
          variant="h2"
          fontSize={"31px"}
          fontWeight={"500"}
          marginBottom={"10px"}
          textAlign={"center"}
          textTransform={"capitalize"}
          lineHeight={'1.1'}
          color={"var(--primary-color)"}
          position={"relative"}
          className='titleBannerCV'
        >
          {props.title}
        </Typography>
        <Typography
          variant="h2"
          fontSize={"14px"}
          fontWeight={"400"}
          marginBottom={"10px"}
          textAlign={"center"}
          textTransform={"capitalize"}
          color={"var(--primary-color)"}
          position={"relative"}
          className='subtitleBannerCV'
        >
          {props.subtitle}
        </Typography>
        <Stack
          position={"relative"}
          direction={"row"}
          justifyContent={"center"}>
          <Button variant="contained" disableElevation  className='bannerCV-button'>PRESIONAME</Button>
        </Stack>
      </Box>
    </Parallax>
  )
}
