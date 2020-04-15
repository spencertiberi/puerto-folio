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

const Button = ({ action, children }) => (
  <StyledButton onClick={action}>{children}</StyledButton>
)

export default Button
