import React from 'react'
import styled from 'styled-components'
import copy from '../../copy'

const Background = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100px;
  background-color: ${(props) => props.theme.colors.primary};
  align-items: center;
  justify-content: center;
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 35px;
  color: ${(props) => props.theme.colors.secondary};
`

const Header = ({ children, pageTitle }) => (
  <Background>
    {copy.title}
    {pageTitle}
    {children}
  </Background>
)

export default Header
