/* eslint-disable no-constant-condition */
/* eslint-disable react/jsx-no-duplicate-props */
import { Box, Grid, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { AnimatedLetters } from "./AnimatedLetters";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Contacts = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const contactArray = "Direcciones".split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box>
      <Box className="dir-box">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={contactArray}
          idx={15}
        />
      </Box>
      <Grid rowGap="20px" className="gridGap" display={"grid"}>
        <motion.div
          className="card"
          initial={{
            opacity: 0,
            // if odd index card,slide from right instead of left
            x: 1 % 2 === 0 ? 50 : -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0, // Slide in to its original position
            transition: {
              duration: 2, // Animation duration
            },
          }}
          viewport={{ once: true }}
        >
          <Grid item display={"flex"} alignItems={"flex-start"} gap={"10px"}>
            <LocationOnIcon />
            <Grid
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
            >
              <Typography
                variant="p"
                fontSize={"14px"}
                fontWeight={"300"}
                color={"#fff"}
              >
                San Luis 2666,
              </Typography>
              <Typography
                variant="p"
                fontSize={"14px"}
                fontWeight={"300"}
                color={"#fefefe"}
              >
                S3000 GBC,
              </Typography>
              <Typography
                variant="p"
                fontSize={"14px"}
                fontWeight={"300"}
                color={"#fefefe"}
              >
                Santa Fe Capital.
              </Typography>
            </Grid>
          </Grid>
        </motion.div>
        <motion.div
          className="card"
          initial={{
            opacity: 0,
            // if odd index card,slide from right instead of left
            x: 2 % 2 === 0 ? 50 : -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0, // Slide in to its original position
            transition: {
              duration: 2, // Animation duration
            },
          }}
          viewport={{ once: true }}
        >
          {/* <Grid item display={"flex"} alignItems={"center"} gap={"10px"}>
            <PhoneIcon />
            <Typography
              variant="p"
              fontSize={"14px"}
              fontWeight={"300"}
              textAlign={"center"}
              color={"#fff"}
              marginLeft={"5px"}
            >
              (+549)342-5051349
            </Typography>
          </Grid> */}
        </motion.div>
        <motion.div
          className="card"
          initial={{
            opacity: 0,
            // if odd index card,slide from right instead of left
            x: 1 % 2 === 0 ? 50 : -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0, // Slide in to its original position
            transition: {
              duration: 2, // Animation duration
            },
          }}
          viewport={{ once: true }}
        >
          <Grid item display={"flex"} alignItems={"center"} gap={"10px"}>
            <WhatsAppIcon />
            <Typography
              variant="p"
              fontSize={"14px"}
              fontWeight={"300"}
              textAlign={"center"}
              color={"#fff"}
              marginLeft={"5px"}
            >
              <a
                href="https://wa.me/5493774491666/?text=Hola , por favor dejame tu mensaje y lo respondere cuando antes..."
                target="_blank"
                rel="noreferrer"
              >
                (+549)3774-491666
              </a>
            </Typography>
          </Grid>
        </motion.div>
        <motion.div
          className="card"
          initial={{
            opacity: 0,
            // if odd index card,slide from right instead of left
            x: 2 % 2 === 0 ? 50 : -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0, // Slide in to its original position
            transition: {
              duration: 2, // Animation duration
            },
          }}
          viewport={{ once: true }}
        >
          <Grid item display={"flex"} alignItems={"center"} gap={"10px"}>
            <AlternateEmailIcon />
            <Typography
              variant="p"
              fontSize={"14px"}
              fontWeight={"300"}
              textAlign={"center"}
              color={"#fff"}
              marginLeft={"5px"}
            >
              alejandro.d.fernandez.88@gmail.com
            </Typography>
          </Grid>
        </motion.div>
        <motion.div
          className="card"
          initial={{
            opacity: 0,
            // if odd index card,slide from right instead of left
            x: 1 % 2 === 0 ? 50 : -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0, // Slide in to its original position
            transition: {
              duration: 2, // Animation duration
            },
          }}
          viewport={{ once: true }}
        >
          <Grid item display={"flex"} alignItems={"center"} gap={"10px"}>
            <LinkedInIcon />
            <Typography
              variant="p"
              fontSize={"14px"}
              fontWeight={"300"}
              textAlign={"center"}
              color={"#fff"}
              marginLeft={"5px"}
            >
              <a
                href="https://www.linkedin.com/in/alefernandez88/"
                target="_blank"
                rel="noreferrer"
              >
                in/alefernandez88
              </a>
            </Typography>
          </Grid>
        </motion.div>
      </Grid>
    </Box>
  );
};
