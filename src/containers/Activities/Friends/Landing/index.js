import React from 'react'
import LandingPage from '../../components/LandingPage'
import copy from '../../../../copy'

const { image, title } = copy.activities.friends

const Landing = () => <LandingPage image={image} title={title} to="info" />

export default Landing
