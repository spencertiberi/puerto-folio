import React from 'react'
import theme from '../../../../../../theme'
import { AvatarContainer, Container, IconCircle, Name } from './styles'

const Avatar = ({ name, mirror, color }) => (
  <AvatarContainer mirror={mirror}>
    <IconCircle color={color} />
    <Name>{name}</Name>
  </AvatarContainer>
)
const userColor = theme.colors.secondary
const friendColor = theme.colors.friend

const Avatars = ({ user, friend }) => (
  <Container>
    <Avatar name={user} color={userColor} />
    <Avatar name={friend} mirror color={friendColor} />
  </Container>
)

export default Avatars
