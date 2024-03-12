/* eslint-disable no-constant-condition */
import { Box, Grid, Container } from "@mui/material";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import CssIcon from "@mui/icons-material/Css";
import MenuBookSharpIcon from "@mui/icons-material/MenuBookSharp";
import ExtensionTwoToneIcon from "@mui/icons-material/ExtensionTwoTone";
import { motion } from "framer-motion";

export default function CardInformation() {
  return (
    <>
      <Container>
        <Grid container justifyContent={"center"}>
          <Grid item xs={12} sm={5} md={3}>
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
                  duration: 1, // Animation duration
                },
              }}
              viewport={{ once: true }}
            >
              <Box
                className="rotate-box-1 square-icon wow zoomIn animated"
                data-wow-delay="0.4s"
                sx={{
                  visibility: "visible",
                  animationDelay: "0.4s",
                  animationName: "zoomIn",
                }}
              >
                <span className="rotate-box-icon">
                  <CodeOffIcon />
                </span>
                <div className="rotate-box-info">
                  <h4>Maquetación Web</h4>
                  <p>
                    Como maquetador web, he trabajado con HTML, CSS y
                    JavaScript, utilizando diversas bibliotecas y frameworks
                    para crear interfaces de usuario atractivas y funcionales.
                  </p>
                </div>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={5} md={3}>
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
              <Box
                className="rotate-box-1 square-icon wow zoomIn animated"
                data-wow-delay="0.8s"
                sx={{
                  visibility: "visible",
                  animationDelay: "0.8s",
                  animationName: "zoomIn",
                }}
              >
                <span className="rotate-box-icon">
                  <CssIcon />
                </span>
                <div className="rotate-box-info">
                  <h4>Tutor de Desarrollo Web</h4>
                  <p>
                    Como tutor de cursos sobre desarrollo web en plataformas de
                    e-learning, he compartido mi experiencia y conocimientos con
                    otros estudiantes, guiándolos en su camino hacia el dominio
                    de las tecnologías web.
                  </p>
                </div>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={5} md={3}>
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
              <Box
                className="rotate-box-1 square-icon wow zoomIn animated"
                data-wow-delay="0.8s"
                sx={{
                  visibility: "visible",
                  animationDelay: "0.8s",
                  animationName: "zoomIn",
                }}
              >
                <span className="rotate-box-icon">
                  <MenuBookSharpIcon />
                </span>
                <div className="rotate-box-info">
                  <h4>Objetivo Profesional</h4>
                  <p>
                    Convertirme en un desarrollador FullStack, dominando ambos
                    mundos del desarrollo web. Estoy comprometido a aprender las
                    habilidades necesarias para aportar soluciones completas a
                    los proyectos en los que trabajo.
                  </p>
                </div>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={5} md={3}>
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
              <Box
                className="rotate-box-1 square-icon wow zoomIn animated"
                data-wow-delay="0.4s"
                sx={{
                  visibility: "visible",
                  animationDelay: "0.4s",
                  animationName: "zoomIn",
                }}
              >
                <span className="rotate-box-icon">
                  <ExtensionTwoToneIcon />
                </span>
                <div className="rotate-box-info">
                  <h4>Especialización Futura</h4>
                  <p>
                    Alcanzado mi objetivo de ser un FullStack Dev, mi plan es
                    especializarme en una sola rama. Esto me permitirá
                    profundizar en áreas específicas y ofrecer soluciones
                    especializadas y de alta calidad a los desafíos del mundo
                    real.
                  </p>
                </div>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
