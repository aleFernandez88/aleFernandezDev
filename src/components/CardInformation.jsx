/* eslint-disable no-constant-condition */
import { Box, Grid, Container } from "@mui/material"
import CodeOffIcon from '@mui/icons-material/CodeOff';
import CssIcon from '@mui/icons-material/Css';
import MenuBookSharpIcon from '@mui/icons-material/MenuBookSharp';
import ExtensionTwoToneIcon from '@mui/icons-material/ExtensionTwoTone';
import { motion } from "framer-motion";

export default function CardInformation() {
  return (
    <>
      <Container>
        <Grid container justifyContent={"center"}>
          <Grid item
            xs={12}
            sm={5}
            md={3}
          >
            <motion.div
              className="card"
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: 1 % 2 === 0 ? 50 : -50
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 1 // Animation duration
                }
              }}
              viewport={{ once: true }}
            >
              <Box className="rotate-box-1 square-icon wow zoomIn animated"
                data-wow-delay="0.4s"
                sx={{
                  visibility: "visible",
                  animationDelay: "0.4s",
                  animationName: "zoomIn"
                }}
              >
                <span className="rotate-box-icon"><CodeOffIcon /></span>
                <div className="rotate-box-info">
                  <h4>Quien soy?</h4>
                  <p>Me llamo Alejandro Fernández y soy un desarrollador web orientado al frontend.</p>
                </div>
              </Box>
            </motion.div>
          </Grid>
          <Grid item
            xs={12}
            sm={5}
            md={3}
          >
            <motion.div
              className="card"
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: 1 % 2 === 0 ? 50 : -50
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 2 // Animation duration
                }
              }}
              viewport={{ once: true }}
            >
              <Box className="rotate-box-1 square-icon wow zoomIn animated"
                data-wow-delay="0.8s"
                sx={{
                  visibility: "visible",
                  animationDelay: "0.8s",
                  animationName: "zoomIn"
                }}
              >
                <span className="rotate-box-icon"><CssIcon /></span>
                <div className="rotate-box-info">
                  <h4>Que tareas hice?</h4>
                  <p>Trabaje en puestos de maquetador web con html,css y javascript usando algunas librerias.</p>
                </div>
              </Box>
            </motion.div>
          </Grid>


          <Grid item
            xs={12}
            sm={5}
            md={3}
          >
           <motion.div
              className="card"
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: 2 % 2 === 0 ? 50 : -50
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 2 // Animation duration
                }
              }}
              viewport={{ once: true }}
            >
            <Box className="rotate-box-1 square-icon wow zoomIn animated"
              data-wow-delay="0.8s"
              sx={{
                visibility: "visible",
                animationDelay: "0.8s",
                animationName: "zoomIn"
              }}
            >
              <span className="rotate-box-icon"><MenuBookSharpIcon /></span>
              <div className="rotate-box-info">
                <h4>Que más hago?</h4>
                <p>Soy tutor de cursos sobre desarrollo web en plataformas de e-learning.</p>
              </div>
            </Box>
            </motion.div>
          </Grid>


          <Grid item
            xs={12}
            sm={5}
            md={3}
          >
          <motion.div
              className="card"
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: 2 % 2 === 0 ? 50 : -50
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 2 // Animation duration
                }
              }}
              viewport={{ once: true }}
            >
            <Box className="rotate-box-1 square-icon wow zoomIn animated"
              data-wow-delay="0.4s"
              sx={{
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "zoomIn"
              }}
            >
              <span className="rotate-box-icon"><ExtensionTwoToneIcon /></span>
              <div className="rotate-box-info">
                <h4>Que me interesa?</h4>
                <p>Aprender lo necesario para ser FullStack en la materia y luego especializarme en alguna rama.</p>
              </div>
            </Box>
            </motion.div>
          </Grid>

        </Grid>
      </Container >
    </>
  )
}
