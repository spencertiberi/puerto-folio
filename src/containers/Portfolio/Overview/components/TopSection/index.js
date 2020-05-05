import React from 'react'
import {
  Container,
  SkillContainer,
  Title,
  IconCircle,
  IconImage,
  UserImage,
  Row,
  Background,
} from './styles'
import purpose from '../../../assets/purpose.png'
import creativity from '../../../assets/creative.png'
import critical from '../../../assets/critical.png'
import user from '../../../assets/persona.png'
import background from '../../../assets/topbg.svg'

const SkillCard = ({ image, title, color }) => (
  <SkillContainer>
    <Title>{title}</Title>
    <IconCircle color={color}>
      <IconImage src={image} />
    </IconCircle>
  </SkillContainer>
)

const TopSection = () => (
  <Container>
    <Background src={background} />
    <Row>
      <SkillCard image={creativity} title="CREATIVITY" color="red" />
    </Row>
    <Row>
      <SkillCard image={critical} title="CRITICAL THINKING" color="blue" />
      <UserImage src={user} />
      <SkillCard image={purpose} title="PURPOSE-DRIVEN" color="yellow" />
    </Row>
  </Container>
)

export default TopSection
