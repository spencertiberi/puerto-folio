import React from 'react'
import styled from 'styled-components'
import { Flex } from '@rebass/grid'

const MainHeading = styled.h2`
  font-size: 24px;
  margin: 0;
  color: ${(props) => props.theme.colors.primary};
`

const Container = styled(Flex)`
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
`
const Heading = ({ children }) => (
  <Container>
    <MainHeading>{children}</MainHeading>
  </Container>
)

export default Heading
