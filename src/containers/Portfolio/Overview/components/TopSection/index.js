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
import user from '../../../assets/persona.png'
import background from '../../../assets/topbg.svg'

const SkillCard = ({ image, title, color, to }) => (
  <SkillContainer to={`portfolio/${color}/${to}`}>
    <Title>{title}</Title>
    <IconCircle color={color}>
      <IconImage src={image} />
    </IconCircle>
  </SkillContainer>
)

const TopSection = ({ skills }) => (
  <Container>
    <Background src={background} />
    <Row>
      <SkillCard
        image={skills[0].image}
        title={'Creativity'.toUpperCase()}
        color="red"
        to={skills[0].title}
      />
    </Row>
    <Row>
      <SkillCard
        image={skills[1].image}
        title={'Critical Thinking'.toUpperCase()}
        color="blue"
        to={skills[1].title}
      />
      <UserImage src={user} />
      <SkillCard
        image={skills[2].image}
        title={'Purpose-Driven'.toUpperCase()}
        color="yellow"
        to={skills[2].title}
      />
    </Row>
  </Container>
)

export default TopSection
