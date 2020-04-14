import styled from 'styled-components'

export const Input = styled.input`
  color: ${(props) => props.theme.colors.offblack};
  font-size: 2em;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 3px;
  padding: 2px 10px;
`

export const Label = styled.label`
  color: ${(props) => props.theme.colors.primary};
  font-size: 1em;
`
