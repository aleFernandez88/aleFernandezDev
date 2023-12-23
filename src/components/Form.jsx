/* eslint-disable no-undef */
/* eslint-disable no-constant-condition */
/* eslint-disable react/no-unknown-property */
import { useRef } from 'react';
import  emailjs  from '@emailjs/browser';
import { Box, Grid, TextField } from '@mui/material'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { AnimatedLetters } from './AnimatedLetters'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

export const Form = () => {

    const refForm = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submit: ",refForm.current)
        const serviceID = "service_pw2vjpk"
        const templateID = "template_sah1j8e"
        const apiKey = "T84310eldmsd5qAQC"
        emailjs.sendForm(serviceID,templateID,refForm.current,apiKey)
        .then( result => console.log(result.text))
        refForm.current.reset()
        .catch( error => console.log( error ))
    }

    const [letterClass, setLetterClass] = useState('text-animate')
    const contactArray = 'Escribime'.split('')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => clearTimeout(timer)
    }, [])
    return (
        <Box component="form" ref={refForm} action="" onSubmit={handleSubmit}>
            <Box className="dir-box">
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={contactArray}
                    idx={15}
                />
            </Box>
            <Grid display={"flex"} flexDirection={"column"} rowGap={"8px"}>
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
                    <TextField
                        label="Name"
                        name='name'
                        type='name'
                        id="name"
                        variant="standard"
                        fullWidth
                        size='small'
                        className='inputsForm'
                        required
                    />
                </motion.div>
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
                    <TextField
                        label="Email"
                        name='email'
                        type='email'
                        id="email"
                        variant="standard"
                        fullWidth
                        size='small'
                        className='inputsForm'
                        required
                    />
                </motion.div>
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
                    <TextField
                        label="Asunto"
                        type='name'
                        name='asunto'
                        id="Asunto"
                        variant="standard"
                        fullWidth
                        size='small'
                        className='inputsForm'
                        required
                    />
                </motion.div>
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
                    <TextField
                        label="Mensaje"
                        name='message'
                        type="text"
                        id="mensaje"
                        variant="standard"
                        fullWidth
                        size='small'
                        minRows={2}
                        maxRows={4}
                        className='inputsForm textArea'
                    />
                </motion.div>
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
                    <Stack direction="row" spacing={2} marginTop={"0px"}>
                        <Button type='submit' variant="contained" endIcon={<SendIcon />} fullWidth >
                            Send
                        </Button>
                    </Stack>
                </motion.div>
            </Grid>
        </Box>
    )
}
