import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledButton = styled(Link)`
  background-color: ${(props) => props.theme.colors.greyScale.offWhite};
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  text-decoration: none;
  font-weight: 900;
  border: 0;
  border-radius: 42px;
  padding: 5px 15px;
  height: 42px;
  width: ${(props) => props.width || 'auto'};
`

const LinkButton = ({ action, children, to, width }) => (
  <StyledButton onClick={action} to={to} width={width}>
    {children}
  </StyledButton>
)

export default LinkButton
