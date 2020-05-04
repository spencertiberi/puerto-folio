import React from 'react'
import styled from 'styled-components'
import { Flex } from '@rebass/grid'
import fb from '../../../assets/fb.png'
import li from '../../../assets/li.png'
import v from '../../../assets/v.png'

const InfoTitle = styled.span`
  font-weight: bold;
  font-size: 11px;
`

const Info = styled.span`
  font-size: 11px;
`

const Row = styled(Flex)`
  flex-direction: row;
  margin-bottom: 16px;
`

const SocialButton = styled.img`
  width: 22px;
  height: 22px;
`

const SocialContainer = styled(Flex)`
  flex-direction: row;
  justify-content: space-between;
  width: 86px;
  padding: 5px 0;
`

const Container = styled(Flex)`
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  margin-top: 25px;
`

const Contact = ({ email, phone }) => (
  <Container>
    <Row>
      <InfoTitle>Email:</InfoTitle>
      <Info>{email}</Info>
    </Row>
    <Row>
      <InfoTitle>Phone:</InfoTitle>
      <Info>{phone}</Info>
    </Row>
    <SocialContainer>
      <SocialButton src={fb} />
      <SocialButton src={li} />
      <SocialButton src={v} />
    </SocialContainer>
  </Container>
)

export default Contact
