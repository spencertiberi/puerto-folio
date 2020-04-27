import React from 'react'
import PageWrapper from '../../../components/PageWrapper'
import copy from '../../../copy'
import penguin from './penguinWithClouds.png'
import { Image, Text } from './styles'

const Fin = ({ updateProgress }) => {
  updateProgress(6 / 6)
  return (
    <>
      <Image src={penguin} />
      <Text>{copy.getStarted}</Text>
    </>
  )
}

export default Fin
