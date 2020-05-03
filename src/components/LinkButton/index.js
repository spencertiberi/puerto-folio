import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledButton = styled(Link)`
  background-color: ${(props) =>
    props.light ? '#fff' : props.theme.colors.secondary};
  color: ${(props) => (props.light ? props.theme.colors.primary : '#fff')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 40px;
  z-index: 100;
  font-size: 15px;
  text-decoration: none;
  font-weight: 900;
  letter-spacing: 5%;
  border: 0;
  border-radius: 42px;
  padding: 5px 15px;
  height: 42px;
  width: ${(props) => props.width || '300px'};
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2);
`

const LinkButton = ({
  as,
  onClick,
  children,
  to,
  width,
  light,
  href,
  ...props
}) => (
  <StyledButton
    onClick={onClick}
    to={to}
    width={width}
    light={light}
    as={as}
    href={href}
    {...props}
  >
    {children}
  </StyledButton>
)

export default LinkButton
