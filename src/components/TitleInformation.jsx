/* eslint-disable react/prop-types */
import { Typography, Box } from "@mui/material"
import { motion } from "framer-motion";


export const TitleInformation = (props) => {

    return (
        <>
            <Box sx={{
                width: '100%',
                maxWidth: "1500",
                padding: "40px 0 0",
                zIndex: "1",
                margin: "30px 0 0"
            }} >
                <Typography
                    variant="h2"
                    fontSize={"30px"}
                    fontWeight={"700"}
                    marginBottom={"10px"}
                    textAlign={"center"}
                    textTransform={"uppercase"}
                    component={motion.h2}
                    initial={{x: -1000}}
                    animate={{x: 0}}
                    transition={{duration: 1    ,
                    delay: .5}}
                >
                    {props.title}
                </Typography>
            </Box>
            <Box className="devider" sx={{
                width: "100%",
                height: "10px",
                margin: "5px 0 40px",
                maxWidth: "100%",
            }}>
                <Typography
                    variant="h2"
                    component={"p"}
                    fontSize={"14px"}
                    letterSpacing={"2px"}
                    fontWeight={"400"}
                    marginTop={"10px"}
                    textAlign={"center"}
                    textTransform={"capitalize"} >
                    {props.subtitle}
                </Typography>
            </Box>
        </>
    )
}
