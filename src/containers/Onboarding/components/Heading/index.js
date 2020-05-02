import React from 'react'
import styled from 'styled-components'
import { Flex } from '@rebass/grid'

const MainHeading = styled.h2`
  font-size: 24px;
  line-height: 29px;
  margin: 0;
  color: ${(props) => props.theme.colors.primary};
`

const SubHeading = styled.h3`
  font-size: 16px;
  margin: 8px 0 0 0;
  color: ${(props) => props.theme.colors.primary};
`

const Container = styled(Flex)`
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 25px;
  align-self: flex-start;
`
const Heading = ({ children, sub }) => (
  <Container>
    <MainHeading>{children}</MainHeading>
    <SubHeading>{sub}</SubHeading>
  </Container>
)

export default Heading
