/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatedLetters } from '../components/AnimatedLetters'
import Loader from 'react-loaders'
import "./Home.css"
import { Container, Typography } from '@mui/material'

export const Home = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = 'Ale'.split('')
  const jobArray = 'Fernández'.split('')
  const interestArray = 'Front-end Developer'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>

      <Container className="home-page">
        <div className="text-zone">
          <Typography variant='h1'>
            <span className={letterClass}>Ho</span>
            <span className={`${letterClass} _12`}>la,</span>
            <span className={`${letterClass} _13`}>S</span>
            <span className={`${letterClass} _14`}>o</span>
            <span className={`${letterClass} _15`}>y</span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={16}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={interestArray}
              idx={22}
            />
          </Typography>
          <h2>
             React | Vite | Tailwind | Github | Agile 
          </h2>
          <Link to="https://drive.google.com/file/d/1fk7X559zCT_mFCbx9EnZqvCrRbMOjGYr/view?usp=sharing" target='_blank' className="flat-button">
            MIRA MI CV
          </Link>
        </div>
      </Container>
      <Loader type="pacman" />

    </>
  )
}