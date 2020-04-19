import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const InputField = styled.input`
  color: ${(props) => props.theme.colors.offblack};
  font-size: 1.5em;
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.colors.primary};
  padding: 2px 0px;

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

const Input = ({ placeholder, label, children, update }) => (
  <Container>
    {label && <Label>{label}</Label>}
    <InputField
      placeholder={placeholder}
      onChange={(e) => update(e.target.value)}
    >
      {children}
    </InputField>
  </Container>
)

export default Input
