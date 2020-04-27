import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`

const InputField = styled.input`
  color: ${(props) => props.theme.colors.primary};
  font-size: 11px;
  border: 1px solid ${(props) => props.theme.colors.greyScale.medium};
  padding: 7px;
  width: auto;

  &:focus {
    background-color: #eee;
  }
`

const Label = styled.label`
  color: ${(props) => props.theme.colors.primary};
  font-size: 1em;
  margin-bottom: 10px;
  font-weight: 700;
`

const Input = ({ placeholder, label, children, update, value, onKeyPress }) => (
  <Container>
    {label && <Label>{label}</Label>}
    <InputField
      value={value}
      onKeyPress={onKeyPress}
      placeholder={placeholder}
      onChange={(e) => update(e.target.value)}
    >
      {children}
    </InputField>
  </Container>
)

export default Input
