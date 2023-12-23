import data from "../assets/informacion/data.js"
import { CardProject } from './CardProject'
import { Grid, Container, Box } from "@mui/material"

export const ProjectsSec = () => {

    return (
        <Box className="proyectosBox">
            <Container fullWidth>
                <Grid container >
                    <Grid item
                        container
                        justifyContent={"center"}
                        xs={12}
                        sm={6}
                        md={4}>
                        <CardProject projects={data[0]} />
                    </Grid>
                    <Grid item
                        container
                        justifyContent={"center"}
                        xs={12}
                        sm={6}
                        md={4}>
                        <CardProject projects={data[1]} />
                    </Grid>
                    <Grid item
                        container
                        justifyContent={"center"}
                        xs={12}
                        sm={6}
                        md={4}>
                        <CardProject projects={data[2]} />
                    </Grid>
                    <Grid item
                        container
                        justifyContent={"center"}
                        xs={12}
                        sm={6}
                        md={4}>
                        <CardProject projects={data[3]} />
                    </Grid>
                    <Grid item
                        container
                        justifyContent={"center"}
                        xs={12}
                        sm={6}
                        md={4}>
                        <CardProject projects={data[4]} />
                    </Grid>
                    <Grid item
                        container
                        justifyContent={"center"}
                        xs={12}
                        sm={6}
                        md={4}>
                        <CardProject projects={data[5]} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

