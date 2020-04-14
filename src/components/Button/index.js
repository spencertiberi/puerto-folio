import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  font-size: 2em;
  border: 0;
  border-radius: 3px;
  padding: 2px 10px;
`

const Button = (props) => (
  <StyledButton onClick={props.action}>{props.children}</StyledButton>
)

export default Button
