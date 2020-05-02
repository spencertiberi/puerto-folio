import React, { useState, useEffect } from 'react'
import { Spinner, SpinnerSize } from '@fluentui/react'
import Button from '../../../../components/LinkButton'
import { Container, Image, ImageContainer, Text } from './styles'
import Heading from '../../components/Heading'
import PageWrapper from '../../../../components/PageWrapper'
import friendPenguin from './friendPenguin.png'

const FriendJoin = () => {
  const [joined, setJoined] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setJoined(true)
    }, 5000)
    return () => clearTimeout(timeout)
  })

  const friend = 'Louisa'
  return (
    <PageWrapper dark>
      <Container>
        <Heading>Waiting for your friend...</Heading>
        <ImageContainer>
          {joined ? (
            <>
              <Image src={friendPenguin} />
              <Text>{`${friend} has joined!`}</Text>
            </>
          ) : (
            <Spinner size={SpinnerSize.large} />
          )}
        </ImageContainer>
      </Container>
      {joined && <Button to="/questions">START QUIZ</Button>}
    </PageWrapper>
  )
}

export default FriendJoin
