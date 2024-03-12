/* eslint-disable no-constant-condition */
import { styled } from "@mui/material/styles";
import { Typography, Box, Grid, Container } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { motion } from "framer-motion";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

export default function SkillsProgress() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          maxWidth: "1500",
          padding: "50px 0",
        }}
      >
        <Typography
          variant="h2"
          fontSize={"30px"}
          fontWeight={"700"}
          marginBottom={"10px"}
          textAlign={"center"}
          textTransform={"capitalize"}
        >
          Mis habilidades
        </Typography>
      </Box>
      <Container>
        <Grid container className="gridContainerSkills">
          <Grid item xs={12} sm={5} md={5}>
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
              <Box sx={{ flexGrow: 3 }}>
                <Typography
                  variant="h2"
                  fontSize={"12px"}
                  fontWeight={"500"}
                  marginBottom={"10px"}
                  textAlign={"start"}
                  textTransform={"capitalize"}
                  letterSpacing={"2px"}
                >
                  HTML
                </Typography>
                <BorderLinearProgress
                  variant="determinate"
                  value={80}
                  className="boxSkills"
                />
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={5} md={5}>
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
              <Box sx={{ flexGrow: 3 }}>
                <Typography
                  variant="h2"
                  fontSize={"12px"}
                  fontWeight={"500"}
                  marginBottom={"10px"}
                  textAlign={"start"}
                  textTransform={"capitalize"}
                  letterSpacing={"2px"}
                >
                  SASS
                </Typography>
                <BorderLinearProgress
                  variant="determinate"
                  value={75}
                  className="boxSkills"
                />
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={5} md={5}>
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
              <Box sx={{ flexGrow: 3 }}>
                <Typography
                  variant="h2"
                  fontSize={"12px"}
                  fontWeight={"500"}
                  marginBottom={"10px"}
                  textAlign={"start"}
                  textTransform={"capitalize"}
                  letterSpacing={"2px"}
                  className="culooo"
                >
                  Javascript
                </Typography>
                <BorderLinearProgress
                  variant="determinate"
                  value={60}
                  className="boxSkills"
                />
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={5} md={5}>
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
              <Box sx={{ flexGrow: 3 }}>
                <Typography
                  variant="h2"
                  fontSize={"12px"}
                  fontWeight={"500"}
                  marginBottom={"10px"}
                  textAlign={"start"}
                  textTransform={"capitalize"}
                  letterSpacing={"2px"}
                >
                  Tailwind
                </Typography>
                <BorderLinearProgress
                  variant="determinate"
                  value={55}
                  className="boxSkills"
                />
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={5} md={5}>
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
              <Box sx={{ flexGrow: 3 }}>
                <Typography
                  variant="h2"
                  fontSize={"12px"}
                  fontWeight={"500"}
                  marginBottom={"10px"}
                  textAlign={"start"}
                  textTransform={"capitalize"}
                  letterSpacing={"2px"}
                >
                  React JS
                </Typography>
                <BorderLinearProgress
                  variant="determinate"
                  value={50}
                  className="boxSkills"
                />
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={5} md={5}>
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
              <Box sx={{ flexGrow: 3 }}>
                <Typography
                  variant="h2"
                  fontSize={"12px"}
                  fontWeight={"500"}
                  marginBottom={"10px"}
                  textAlign={"start"}
                  textTransform={"capitalize"}
                  letterSpacing={"2px"}
                >
                  GitHub
                </Typography>
                <BorderLinearProgress
                  variant="determinate"
                  value={65}
                  className="boxSkills"
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
