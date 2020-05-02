import React from 'react'
import styled from 'styled-components'
import { Flex } from '@rebass/grid'

const Container = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`

const InputField = styled(Flex)`
  display: flex;
  color: ${(props) => props.theme.colors.primary};
  font-size: 16px;
  border: 1px solid ${(props) => props.theme.colors.greyScale.medium};
  padding: 8px;
  width: 100%;

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
      as="input"
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
