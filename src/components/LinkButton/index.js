import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledButton = styled(Link)`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.75em;
  text-decoration: none;
  border: 0;
  border-radius: 3px;
  padding: 5px 15px;
  width: ${(props) => props.width || 'auto'};
`

const LinkButton = ({ action, children, to, width }) => (
  <StyledButton onClick={action} to={to} width={width}>
    {children}
  </StyledButton>
)

export default LinkButton
