import React from 'react'
import Button from '../../../components/LinkButton'
import copy from '../../../copy'
import penguin from './penguinWithClouds.png'
import { Image, Text } from './styles'

const Fin = ({ updateProgress }) => {
  updateProgress(6 / 6)
  return (
    <>
      <Image src={penguin} />
      <Text>{copy.getStarted}</Text>
      <Button as="a" href="/activities">
        CONTINUE
      </Button>
    </>
  )
}

export default Fin
