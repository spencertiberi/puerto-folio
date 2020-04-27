import styled from 'styled-components'

export const Text = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  white-space: pre;
  word-wrap: normal;
  text-overflow: wrap;
  width: auto;
  height: auto;
  margin-top: 92px;
`

export const Image = styled.img`
  height: auto;
  width: 70vw;
`
