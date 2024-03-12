import { Box, Container, Grid } from "@mui/material"
import { Form } from "./Form"
import { Contacts } from "./Contacts"
import { TitleInformation } from "./TitleInformation"

export const ContactForm = () => {
    return (
        
            <Box className="BgForm">
            <TitleInformation title={"contacto"} subtitle={"estoy en cualquier opción"} sx={{color:"#fefefe"}}/>
                <Container>
                    <Grid container
                        justifyContent={"space-between"}>
                        <Grid item
                            xs={12}
                            sm={5}
                            md={5}>
                            <Contacts />
                        </Grid>
                        <Grid item
                            xs={12}
                            sm={5}
                            md={5}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
    )
}