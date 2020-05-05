import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const Text = styled.div`
  font-size: 24px;
  line-height: 30px;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  word-wrap: normal;
  text-overflow: wrap;
  max-width: 325px;
  height: auto;
  margin-top: 150px;
`

export const Container = styled(Flex)`
  background-color: ${(props) => props.theme.colors.primary};
  flex-direction: column;
  align-items: center;
`
