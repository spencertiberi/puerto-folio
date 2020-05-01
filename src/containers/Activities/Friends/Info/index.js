import React from 'react'
import InfoPage from '../../components/InfoPage'
import copy from '../../../../copy'

const { info } = copy.activities.friends

const Landing = () => <InfoPage text={info} to="share" />

export default Landing
