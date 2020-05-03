import React from 'react'
import styled from 'styled-components'
import { Flex } from '@rebass/grid'

const Wrapper = styled(Flex)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: ${(props) => `${props.vh * 100}px`};
  width: 100vw;
  padding: 10px 5vw 0;
  font-family: ${(props) => props.theme.fonts.main};
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) =>
    props.dark ? props.theme.colors.primary : 'none'};
`

const PageWrapper = ({ children, dark }) => {
  const vh = window.innerHeight * 0.01

  return (
    <Wrapper vh={vh} dark={dark}>
      {children}
    </Wrapper>
  )
}

export default PageWrapper
